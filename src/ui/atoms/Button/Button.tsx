import { Button } from '@mui/material';
import type { Props } from './props/Props';

export const StoryButton = ({ text, onClick, color = 'primary', type = 'outlined', startIcon, endIcon }: Props) => {
  return (
    <Button color={color} variant={type} onClick={onClick} startIcon={startIcon} endIcon={endIcon}>
      {text}
    </Button>
  );
};
