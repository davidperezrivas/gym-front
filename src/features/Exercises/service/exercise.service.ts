import { httpClient } from '@/configuration/httpClient';

export interface Exercise {
  id: string;
  name: string;
  muscleGroup: string;
  url: string;
}

export type CreateExerciseDto = Omit<Exercise, 'id'>;

export const exerciseService = {
  getAll: async (): Promise<Exercise[]> => {
    const { data } = await httpClient.get('/exercises');
    return data;
  },

  create: async (payload: CreateExerciseDto): Promise<Exercise> => {
    const { data } = await httpClient.post('/exercises', payload);
    return data;
  },
};
