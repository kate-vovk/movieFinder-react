import { searchOption } from '@/constants/constants';

interface ICreatePath {
  searchQuery: string;
  selectParam: string;
}

export const createPath = (params: ICreatePath): string => {
  let finalPath = '';
  let querySelectParam = 'movie';
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
