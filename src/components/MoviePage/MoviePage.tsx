import { FunctionComponent, useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { getDataMoviePage } from '@/businessLogic/movie';
import { IMovie } from '@/utils/interfaces/cartInterfaces';
import { MovieInfo } from './MovieInfo/MovieInfo';
import { MoviePoster } from './MoviePoster/MoviePoster';
import { MovieFeedback } from './MovieFeedback/MovieFeedback';
import { useStyle } from './styles';

interface IProps {
  id: string;
}

export const MoviePage: FunctionComponent<IProps> = ({ id }) => {
  const classes = useStyle();
  const history = useHistory();
  const [movie, setMovie] = useState<IMovie>({} as IMovie);
  const [actors, setActors] = useState<string[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const goToBack = (): void => {
    history.goBack();
  };

  useEffect(() => {
    getDataMoviePage(id).then((data): void => {
      setMovie(data.movieCard);
      setActors(data.actorsList);
      setGenres(data.genresList);
      setCategories(data.categoriesList);
    });
  }, []);

  return (
    <div>
      <div className={classes.container}>
        <Button
          className={classes.buttonMovie}
          color="primary"
          variant="contained"
          type="button"
          onClick={goToBack}
        >
          Go home
        </Button>
        {Object.keys(movie).length ? (
          <>
            <div className={classes.contentMovie}>
              <MoviePoster cover={movie?.cover} price={movie?.price} title={movie?.title} />
              <MovieInfo
                title={movie?.title}
                year={movie?.year}
                duration={movie?.duration}
                director={movie?.director}
                actorsList={actors}
                genresList={genres}
                categoriesList={categories}
              />
            </div>
            {movie.description && (
              <div className={classes.descriptionMovie}>
                <h2 className={classes.descriptionMovieTitle}>Description</h2>
                <p className={classes.descriptionMovieText}>{movie?.description}</p>
              </div>
            )}
            {movie.trailer && (
              <div className={classes.trailerMovie}>
                <iframe
                  width="560"
                  height="315"
                  src={movie?.trailer}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
            <MovieFeedback />
          </>
        ) : (
          <h2>Movie page not found</h2>
        )}
      </div>
    </div>
  );
};
