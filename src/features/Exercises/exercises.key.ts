export const exerciseKeys = {
  all: ['exercises'] as const,

  lists: () => [...exerciseKeys.all, 'list'] as const,

  detail: (id: string) => [...exerciseKeys.all, 'detail', id] as const,
};
