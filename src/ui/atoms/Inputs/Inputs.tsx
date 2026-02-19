import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';

export function InputText<T extends FieldValues>({ name, control, ...props }) {
  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField {...field} {...props} error={!!fieldState.error} helperText={fieldState.error?.message} />
      )}
    />
  );
}
