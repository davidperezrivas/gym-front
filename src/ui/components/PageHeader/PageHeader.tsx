import { Stack } from '@mui/material';
import type { Props } from './props/Props';
import { StoryText } from '@/ui/atoms/Text/Text';

export const PageHeader = ({ title, description = '' }: Props) => {
  return (
    <Stack spacing={2} sx={{ mb: 3 }}>
      <StoryText text={title} color="text.primary" size="h4" />
      <StoryText text={description} color="text.secondary" size="body2" />
    </Stack>
  );
};
