import type { IconButtonProps } from '@mui/material';
import type { SvgIconComponent } from '@mui/icons-material';

export interface Props {
  icon: SvgIconComponent;
  onClick?: () => void;
  color?: IconButtonProps['color'];
  size?: IconButtonProps['size'];
  ariaLabel?: string;
  disabled?: IconButtonProps['disabled'];
}
