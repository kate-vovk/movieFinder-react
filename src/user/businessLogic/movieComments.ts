import { AxiosPromise } from 'axios';
import { addMovieCommentAPI, getMovieAllCommentsAPI } from '../api/movieComments';

export const getMovieAllComments = async ({ movieId }: { movieId: string }): Promise<any> => {
  const {
    data: { results },
  } = await getMovieAllCommentsAPI({ movieId });
  return results;
};

export const addMovieComment = async ({
  movieId,
  userId,
  comment,
}: {
  movieId: string;
  userId: string;
  comment: string;
}): Promise<AxiosPromise> => {
  return addMovieCommentAPI({
    userId,
    comment,
    movieId,
  });
};
