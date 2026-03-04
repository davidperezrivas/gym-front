import { formatDate } from '@/shared/date/date.formatter';

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: string;
  url: string;
  createdAt: string;
}
export const mapExercise = (data: any): Exercise => ({
  id: data.id_exercise,
  name: data.exercise_name,
  muscleGroup: data.muscle_group,
  url: data.url,
  createdAt: formatDate(data.created_at, 'YYYY-MM-DD'),
});
