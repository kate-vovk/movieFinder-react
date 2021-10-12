import { SearchOption } from '@/interfaces/movieInterface';

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
    case SearchOption.initial:
      searchParam = 'initial';
      break;
    case SearchOption.movie:
      searchParam = 'initial';
      break;
    case SearchOption.studio:
      searchParam = 'production_company';
      break;
    case SearchOption.actor:
      searchParam = 'actor';
      break;
    default:
      break;
  }

  finalPath = `${searchParam}=${searchQuery}${filtersPath}`;
  return finalPath;
};
