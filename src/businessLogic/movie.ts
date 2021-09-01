import { getMovie, getListActors, getListGenres, getListCategories } from '@/api/movie';
import { IMovie } from '@/utils/interfaces/cartInterfaces';

interface IMovieData {
  movieCard: IMovie;
  actorsList: string[];
  genresList: string[];
  categoriesList: string[];
}

interface IActorData {
  id: string;
  name: string;
}

const getListActorsMovie = async (arrayActorId: string[]): Promise<string[]> => {
  const { data: actorsData } = await getListActors();
  return actorsData.reduce((arrayData: string[], { id, name }: IActorData): Array<string> => {
    if (arrayActorId?.includes(id)) arrayData.push(name);
    return arrayData;
  }, []);
};

const getListGenresMovie = async (arrayGenreId: string[]): Promise<string[]> => {
  const { data: genresData } = await getListGenres();
  return genresData.reduce((arrayData: string[], { id, name }: IActorData): Array<string> => {
    if (arrayGenreId?.includes(id)) arrayData.push(name);
    return arrayData;
  }, []);
};

const getListCategoriesMovie = async (arrayCategoryId: string[]): Promise<string[]> => {
  const { data: categoriesData } = await getListCategories();
  return categoriesData.reduce((arrayData: string[], { id, name }: IActorData): Array<string> => {
    if (arrayCategoryId?.includes(id)) arrayData.push(name);
    return arrayData;
  }, []);
};

export const getDataMoviePage = async (movieId: string): Promise<IMovieData> => {
  const { data: movieCardData } = await getMovie(movieId);
  const movieCard = movieCardData;
  const actorsList = await getListActorsMovie(movieCardData.actors).then((data) => data);
  const genresList = await getListGenresMovie(movieCardData.genres).then((data) => data);
  const categoriesList = await getListCategoriesMovie(movieCardData.categories).then(
    (data) => data,
  );
  return {
    movieCard,
    actorsList,
    genresList,
    categoriesList,
  };
};
