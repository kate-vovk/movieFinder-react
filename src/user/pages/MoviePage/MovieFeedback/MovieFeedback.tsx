import { FunctionComponent, useEffect, useState, ChangeEvent } from 'react';
import { Pagination } from '@material-ui/lab';
import { useTranslation } from 'react-i18next';
import { getMovieAllComments } from '@/user/businessLogic/movieComments';
import { MovieFeedbackForm } from './MovieFeedbackForm';
import { MovieFeedbackList } from './MovieFeedbackList';
import { useStyle } from './styles';
import { IComment } from '@/interfaces/commentInterfaces';
import { DataStatus } from '@/interfaces/status';

export const MovieFeedback: FunctionComponent<{
  movieId: string;
}> = ({ movieId }) => {
  const classes = useStyle();
  const [movieComments, setMovieComments] = useState<IComment[]>([]);
  const [totalAmountOfPages, setTotalAmountOfPages] = useState<number>(1);
  const [isEditedComment, setEditedComment] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const limit = 5;

  const handleChange = (event: ChangeEvent<unknown>, value: number): void => {
    setPage(value);
  };
  const [movieFeedbackStatus, setMovieFeedbackStatus] = useState(DataStatus.initial);
  const { t } = useTranslation(['MoviePage']);

  useEffect(() => {
    setMovieFeedbackStatus(DataStatus.loading);
    getMovieAllComments({ movieId, page, limit })
      .then(({ results, total }) => {
        if (results.length) {
          setMovieComments(Array.from(results));
          setTotalAmountOfPages(Math.ceil(total / limit));
          setMovieFeedbackStatus(DataStatus.success);
        } else {
          setMovieFeedbackStatus(DataStatus.empty);
        }
      })
      .catch(() => {
        setMovieFeedbackStatus(DataStatus.error);
      });
    setEditedComment(false);
  }, [page, movieComments.length, isEditedComment]);
  return (
    <>
      <MovieFeedbackForm
        movieId={movieId}
        setAddedComment={setEditedComment}
        setPage={setPage}
        setMovieFeedbackStatus={setMovieFeedbackStatus}
      />

      <h2 style={{ textAlign: 'center' }}>{t('Comments')}</h2>
      <MovieFeedbackList
        movieComments={movieComments}
        setEditedComment={setEditedComment}
        movieFeedbackStatus={movieFeedbackStatus}
        setMovieFeedbackStatus={setMovieFeedbackStatus}
      />
      <div className={classes.paginationContainer}>
        <Pagination count={totalAmountOfPages} page={page} onChange={handleChange} />
      </div>
    </>
  );
};
