import { FunctionComponent, useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useHistory, useParams, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { CLIENT_PATHS } from '@/constants';
import { getDataMoviePage } from '@/businessLogic/movie';
import { IMovie } from '@/utils/interfaces/cartInterfaces';
import { movieListSelector } from '@/selectors/search';
import { MovieFeedback } from './MovieFeedback/MovieFeedback';
import { MovieInfo } from './MovieInfo/MovieInfo';
import { MoviePoster } from './MoviePoster/MoviePoster';
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
  const existingFilm = allMovies.find((item) => item.id === id); // tested on type number. Will work when id-type is string.
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
                company={movie?.productionCompanyId}
                country={movie?.countryId}
                actorsList={movie?.cast}
                genresList={movie?.genreId}
                categoriesList={movie?.categoryId}
              />
            </div>
            <div className={classes.descriptionMovie}>
              <h2 className={classes.descriptionMovieTitle}>{t('description')}</h2>
              <p className={classes.descriptionMovieText}>{movie?.description}</p>
            </div>
            <div className={classes.trailerMovie}>
              {/* <iframe
                width="560"
                height="315"
                src={movie?.trailerUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              /> */}
              <iframe
                src={movie?.trailerUrl}
                width="560"
                height="315"
                // allowfullscreen="true"
                // mozallowfullscreen="true"
                // webkitallowfullscreen="true"
                frameBorder="no"
                scrolling="no"
              />
            </div>
            <MovieFeedback />
          </>
        ) : (
          <Redirect to={CLIENT_PATHS.notFound} />
        )}
      </div>
    </div>
  );
};
