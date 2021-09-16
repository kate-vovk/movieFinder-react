import { searchOption } from '@/constants/constants';

interface ICreatePath {
  searchQuery?: string;
  selectParam?: string;
  selectedGenres?: string[];
  selectedCategories?: string[];
  selectedCountries?: string[];
}

export const createPath = ({
  searchQuery = '',
  selectParam = '',
  selectedGenres = [],
  selectedCategories = [],
  selectedCountries = [],
}: ICreatePath): string => {
  let finalPath = '';
  let searchParam = '';
  const filtrationGenres = `genres=${selectedGenres.join()}`;
  const filtrationCategories = `categories=${selectedCategories.join()}`;
  const filtrationCountries = `countries=${selectedCountries.join()}`;

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
  finalPath = `${searchParam}=${searchQuery}&${filtrationGenres}&${filtrationCategories}&${filtrationCountries}`;
  return finalPath;
};
