import type { ButtonProps } from '@mui/material';

export interface Props {
  text: string;
  onClick?: () => void;
  color?: ButtonProps['color'];
  type?: ButtonProps['variant'];
  startIcon?: ButtonProps['startIcon'];
  endIcon?: ButtonProps['endIcon'];
}
