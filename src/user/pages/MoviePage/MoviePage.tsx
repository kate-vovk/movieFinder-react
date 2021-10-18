import { FunctionComponent, useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { CLIENT_PATHS } from '@/user/constants';
import { getMovieDataAndUserRate } from '@/user/businessLogic/movie';
import { IMovie } from '@/interfaces/movieInterface';
import { MovieFeedback } from './MovieFeedback';
import { MovieInfo } from './MovieInfo';
import { MoviePoster } from './MoviePoster';
import { MovieDescription } from './MovieDescription';
import { MovieTrailer } from './MovieTrailer';
import { useStyle } from './styles';
import { userIdSelector } from '@/user/store/selectors/auth';
import { DataStatus } from '@/interfaces/status';
import { Circular } from '@/sharedComponents/Circular';

interface IParamsIdMovie {
  id: string;
}

export const MoviePage: FunctionComponent = () => {
  const { t } = useTranslation(['MoviePage']);
  const { id } = useParams<IParamsIdMovie>();
  const classes = useStyle();
  const history = useHistory();

  const [moviePageStatus, setMoviePageStatus] = useState(DataStatus.initial);
  const [movie, setMovie] = useState({} as IMovie);
  const [voteAverage, setVoteAverage] = useState<number>(0);
  const [userRate, setUserRate] = useState(0);
  const [isEditedUserRate, setEditedUserRate] = useState<boolean>(false);

  const userId = useSelector(userIdSelector);

  const goToMainPage = (): void => {
    history.push(CLIENT_PATHS.main);
  };

  useEffect(() => {
    setMoviePageStatus(DataStatus.loading);
    getMovieDataAndUserRate({
      movieId: id,
      userId,
    }).then(({ movie: m, userRate: rate }) => {
      setMovie(m.movie);
      setVoteAverage(m.voteAverage);
      setUserRate(rate);
      setMoviePageStatus(DataStatus.success);
    });
    setEditedUserRate(false);
  }, [userRate, isEditedUserRate]);

  if (moviePageStatus === DataStatus.loading) {
    return <Circular />;
  }

  return (
    <div>
      <div className={classes.container}>
        <Button
          className={classes.buttonMovie}
          color="primary"
          variant="contained"
          type="button"
          onClick={goToMainPage}
        >
          {t('goHome')}
        </Button>
        <>
          <div className={classes.contentMovie}>
            <MoviePoster
              cover={movie?.coverUrl}
              price={Number(movie?.price)}
              title={movie?.title}
              movieId={id}
              voteAverage={voteAverage}
              userRate={userRate}
              setUserRate={setUserRate}
              setEditedUserRate={setEditedUserRate}
              setMoviePageStatus={setMoviePageStatus}
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
          <MovieFeedback
            movieId={id}
            // isEditedComment={isEditedComment}
            // setEditedComment={setEditedComment}
          />
        </>
      </div>
    </div>
  );
};
