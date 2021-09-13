/* eslint-disable camelcase */
import { getMovieByParams } from '@/api/search';
import { IMovieGET } from '@/utils/interfaces/cartInterfaces';

export const getMovieByQuery = async (selectParam?: string, searchQuery?: string): Promise<any> => {
  const { data } = await getMovieByParams(selectParam, searchQuery);
  const dataInCamelCase = data.map((movie: IMovieGET) => {
    const {
      category_id,
      country_id,
      cover_url,
      genre_id,
      production_company_id,
      release_date,
      trailer_url,
      ...rest
    } = movie;
    const movieInCamelCase = {
      category: category_id,
      countryId: country_id,
      coverUrl: cover_url,
      genreId: genre_id,
      productionCompanyId: production_company_id,
      releaseDate: release_date,
      trailerUrl: trailer_url,
      ...rest,
    };
    return movieInCamelCase;
  });
  return dataInCamelCase;
};
