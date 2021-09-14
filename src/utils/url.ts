import { searchOption } from '@/constants/constants';

export const createPath = (params: never): string => {
  let finalPath = '';
  let querySelectParam = '';
  const { searchQuery, selectParam } = params;

  switch (selectParam) {
    case searchOption.initial:
      querySelectParam = 'initial';
      break;
    case searchOption.studio:
      querySelectParam = 'production_company';
      break;
    case searchOption.actor:
      querySelectParam = 'actor';
      break;
    default:
      break;
  }
  finalPath = `${querySelectParam}=${searchQuery}`;
  return finalPath;
};
