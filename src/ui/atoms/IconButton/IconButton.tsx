import IconButton from '@mui/material/IconButton';
import type { Props } from './props/Props';

export const IconButtons = ({
  icon: Icon,
  onClick,
  color = 'inherit',
  size = 'medium',
  ariaLabel,
  disabled,
}: Props) => {
  return (
    <IconButton aria-label={ariaLabel} onClick={onClick} color={color} size={size} disabled={disabled}>
      <Icon fontSize="inherit" />
    </IconButton>
  );
};
