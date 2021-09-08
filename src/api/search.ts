import { searchOption } from '@/utils/interfaces/searchOption';
import { SERVER_PATHS } from '@/constants/constants';
import HTTPService from '@/services/httpService';

export const getMovieByParams = (selectParam?: string, searchQuery?: string): Promise<any> => {
  switch (selectParam) {
    case searchOption.initial:
      return Promise.all([
        HTTPService.get(`${SERVER_PATHS.movies}?title_like=${searchQuery}`),
        HTTPService.get(`${SERVER_PATHS.movies}?description_like=${searchQuery}`),
      ]).then((response) => {
        const movies = response.reduce((previous, current) => {
          return previous.concat(current.data);
        }, []);

        const finalMovies: Record<string, string | number>[] = [];
        movies.map((movie: Record<string, string | number>) => {
          // used negation because finalMovies is empty in the start of the condition
          if (!finalMovies.some((finalMovie) => finalMovie.id === movie.id))
            finalMovies.push(movie);
        });

        return { data: finalMovies };
      });

    case searchOption.movie:
      return HTTPService.get(`${SERVER_PATHS.movies}?title_like=${searchQuery}`);
    case searchOption.studio:
      return HTTPService.get(`${SERVER_PATHS.movies}?company_like=${searchQuery}`);
    case searchOption.actor:
      return HTTPService.get(`${SERVER_PATHS.main}actors?name_like=${searchQuery}`).then(
        (response) => HTTPService.get(`${SERVER_PATHS.movies}?actors_like=${response.data[0]?.id}`),
      );
    default:
      return HTTPService.get(SERVER_PATHS.movies).then((response) => response);
  }
};
