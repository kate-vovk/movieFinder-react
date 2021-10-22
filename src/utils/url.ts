import { SearchOption } from '@/interfaces/movieInterface';

interface ICreatePath {
  searchQuery?: string;
  selectParam?: string;
  currentPage: number;
  moviePerPage: number;
  filters?: { [key: string]: string[] };
}

export const createPath = ({
  searchQuery = '',
  selectParam = '',
  currentPage,
  moviePerPage,
  filters = {},
}: ICreatePath): string => {
  const filtersPath = Object.keys(filters).reduce(
    (acc: string, key) => `${acc}&${key}=${filters[key].join()}`,
    '',
  );

  let searchParam = '';
  let finalPath = `page=${currentPage}&limit=${moviePerPage}${filtersPath}`;

  if (searchQuery.length !== 0) {
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

    finalPath += `&${searchParam}=${searchQuery}`;
  }

  return finalPath;
};
