import type { TypographyProps } from '@mui/material';

export interface Props {
  text: string;
  size?: TypographyProps['variant'];
  color?: TypographyProps['color'];
}
