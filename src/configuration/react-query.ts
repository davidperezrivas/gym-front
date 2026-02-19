import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Tiempo que los datos se consideran "fresh"
      staleTime: 1000 * 60 * 5, // 5 minutos

      // Tiempo que permanecen en memoria sin usarse
      gcTime: 1000 * 60 * 30, // 30 minutos

      // Evita refetch automático al cambiar de pestaña
      refetchOnWindowFocus: false,

      // Reintenta solo 1 vez si falla
      retry: 1,
    },
    mutations: {
      retry: 1,
    },
  },
});
