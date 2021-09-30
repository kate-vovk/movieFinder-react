import { FunctionComponent, useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useHistory, useParams, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { CLIENT_PATHS } from '@/user/constants';
import { getDataMoviePage } from '@/user/businessLogic/movie';
import { IMovie } from '@/interfaces/movieInterface';
import { movieListSelector } from '@/user/store/selectors/movies';
import { MovieFeedback } from './MovieFeedback';
import { MovieInfo } from './MovieInfo';
import { MoviePoster } from './MoviePoster';
import { MovieDescription } from './MovieDescription';
import { MovieTrailer } from './MovieTrailer';
import { useStyle } from './styles';

interface IParamsIdMovie {
  id: string;
}

export const MoviePage: FunctionComponent = () => {
  const { t } = useTranslation(['MoviePage']);
  const { id } = useParams<IParamsIdMovie>();
  const classes = useStyle();
  const history = useHistory();
  const [movie, setMovie] = useState({} as IMovie);
  const allMovies = useSelector(movieListSelector);
  const existingFilm = allMovies.find((item) => item.id === id);
  const goToBack = (): void => {
    history.goBack();
  };

  useEffect(() => {
    getDataMoviePage(id).then((data): void => {
      setMovie(data);
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
          {t('goHome')}
        </Button>
        {existingFilm ? (
          <>
            <div className={classes.contentMovie}>
              <MoviePoster
                cover={movie?.coverUrl}
                price={Number(movie?.price)}
                title={movie?.title}
                movieId={id}
              />
              <MovieInfo
                title={movie?.title}
                year={movie?.releaseDate}
                duration={movie?.duration}
                director={movie?.producer}
                company={movie?.productionCompany}
                country={movie?.country}
                actorsList={movie?.cast}
                genresList={movie?.genres}
                categoriesList={movie?.categories}
              />
            </div>
            <MovieDescription description={movie?.description} />
            <MovieTrailer trailerUrl={movie?.trailerUrl} />
            <MovieFeedback />
          </>
        ) : (
          <Redirect to={CLIENT_PATHS.notFound} />
        )}
      </div>
    </div>
  );
};