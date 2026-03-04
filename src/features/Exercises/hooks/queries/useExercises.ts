import { useQuery } from '@tanstack/react-query';
import { exerciseKeys } from '../../exercises.key';
import { exerciseService } from '../../service/exercise.service';

// useExercises.ts
export const useExercises = () => {
  return useQuery({
    queryKey: exerciseKeys.lists(),
    queryFn: exerciseService.getAll,
    staleTime: 1000 * 60 * 3,
  });
};
