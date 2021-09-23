import { searchOption } from '@/user/constants/constants';

interface ICreatePath {
  searchQuery?: string;
  selectParam?: string;
  filters?: { [key: string]: string[] };
}

export const createPath = ({
  searchQuery = '',
  selectParam = '',
  filters = {},
}: ICreatePath): string => {
  let finalPath = '';
  let searchParam = '';
  const filtersPath = Object.keys(filters).reduce(
    (acc: string, key) => `${acc}&${key}=${filters[key].join()}`,
    '',
  );

  switch (selectParam) {
    case searchOption.initial:
      searchParam = 'initial';
      break;
    case searchOption.movie:
      searchParam = 'initial';
      break;
    case searchOption.studio:
      searchParam = 'production_company';
      break;
    case searchOption.actor:
      searchParam = 'actor';
      break;
    default:
      break;
  }

  finalPath = `${searchParam}=${searchQuery}${filtersPath}`;
  return finalPath;
};
