import { Typography } from '@mui/material';
import type { Props } from './props/Props';

export const StoryText = ({ text, size = 'h4', color = 'text.secondary' }: Props) => {
  return (
    <Typography variant={size} color={color}>
      {text}
    </Typography>
  );
};
