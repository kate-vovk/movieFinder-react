import { searchOption } from '@/constants/constants';

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
  const filtrationGenres = filters.genres ? `&genres=${filters.genres.join()}` : '';
  const filtrationCategories = filters.categories ? `&categories=${filters.categories.join()}` : '';
  const filtrationCountries = filters.countries ? `&countries=${filters.countries.join()}` : '';

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

  finalPath = `${searchParam}=${searchQuery}${filtrationGenres}${filtrationCategories}${filtrationCountries}`;
  return finalPath;
};
