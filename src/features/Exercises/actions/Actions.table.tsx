import { Stack } from '@mui/material';
import { IconButtons } from '@/ui/atoms/IconButton/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export const ActionButtons = (props: any) => {
  const { data } = props;

  const handleEdit = () => {
    console.log('Editar', data);
  };

  const handleDelete = () => {
    console.log('Eliminar', data);
  };

  return (
    <Stack direction="row" spacing={1}>
      <IconButtons icon={EditIcon} onClick={handleEdit} />
      <IconButtons icon={DeleteIcon} onClick={handleDelete} />
    </Stack>
  );
};
