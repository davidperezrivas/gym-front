import dayjs from 'dayjs';

export const formatDate = (date: string | Date, format = 'DD/MM/YYYY') => {
  return dayjs(date).format(format);
};
