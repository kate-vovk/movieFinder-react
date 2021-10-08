import { FunctionComponent, useEffect, useState, ChangeEvent } from 'react';
import { Pagination } from '@material-ui/lab';
import { getMovieAllComments } from '@/user/businessLogic/movieComments';
import { MovieFeedbackForm } from './MovieFeedbackForm';
import { MovieFeedbackList } from './MovieFeedbackList';
import { useStyle } from './styles';

export const MovieFeedback: FunctionComponent<{ movieId: string }> = ({ movieId }) => {
  const classes = useStyle();
  const [isEditedComment, setEditedComment] = useState<boolean>(false);
  const [movieComments, setMovieComments] = useState<any[]>([]);
  const [totalAmountOfPages, setTotalAmountOfPages] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const limit = 5;

  const handleChange = (event: ChangeEvent<unknown>, value: number): void => {
    setPage(value);
  };

  useEffect(() => {
    getMovieAllComments({ movieId, page, limit }).then(({ results, total }) => {
      setMovieComments(Array.from(results));
      setTotalAmountOfPages(Math.ceil(total / limit));
    });
    setEditedComment(false);
  }, [page, movieComments.length, isEditedComment]);
  return (
    <>
      <MovieFeedbackForm movieId={movieId} isAddedComment={setEditedComment} />

      <MovieFeedbackList movieComments={movieComments} setEditedComment={setEditedComment} />
      <div className={classes.paginationContainer}>
        <Pagination count={totalAmountOfPages} page={page} onChange={handleChange} />
      </div>
    </>
  );
};
