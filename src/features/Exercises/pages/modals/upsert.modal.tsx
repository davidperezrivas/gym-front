import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { InputText } from '@/ui/atoms/Inputs/Inputs';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface ExerciseModalProps {
  open: boolean;
  onClose: () => void;
}

export const ExerciseModal = ({ open, onClose }: ExerciseModalProps) => {
  const exerciseSchema = yup.object({
    name: yup.string().required('El nombre es obligatorio'),
    muscleGroup: yup.string().required('El grupo muscular es obligatorio'),
    url: yup.string().required('La url es obligatoria').max(200, 'Máximo 200 caracteres'),
  });

  type ExerciseFormValues = yup.InferType<typeof exerciseSchema>;

  const defaultValues: ExerciseFormValues = {
    name: '',
    muscleGroup: '',
    url: '',
  };

  const { handleSubmit, reset, control, getValues } = useForm<ExerciseFormValues>({
    defaultValues,
    resolver: yupResolver(exerciseSchema),
  });

  const handleClose = () => {
    reset();
    onClose();
  };

  const onSubmit = () => {
    const { name, muscleGroup, url } = getValues();

    console.log({ name, muscleGroup, url });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Crear ejercicio</DialogTitle>

      <DialogContent>
        <Stack spacing={2} mt={1}>
          <InputText<ExerciseFormValues> name="name" control={control} label="Nombre" />
          <InputText<ExerciseFormValues> name="muscleGroup" control={control} label="Grupo Muscular" />
          <InputText<ExerciseFormValues> name="url" control={control} label="Url Video" />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="inherit">
          Cancelar
        </Button>
        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
