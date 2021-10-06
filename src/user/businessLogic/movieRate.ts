import { AxiosPromise } from 'axios';
import { getMovieRateAPI, addRateAPI, deleteRateAPI, updateRateAPI } from '../api/movieRate';

export const addRate = async ({
  movieId,
  userId,
  rate,
}: {
  movieId: string;
  userId: string;
  rate: number;
}): Promise<AxiosPromise> => {
  const { data } = await getMovieRateAPI({ movieId, userId });
  return data.length === 0
    ? addRateAPI({
        movieId,
        userId,
        rate,
      })
    : updateRateAPI({
        movieId,
        userId,
        rate,
      });
};

export const deleteRate = ({
  movieId,
  userId,
}: {
  movieId: string;
  userId: string;
}): Promise<AxiosPromise> => {
  return deleteRateAPI({ movieId, userId });
};

export const getMovieRate = async ({
  movieId,
  userId,
}: {
  movieId: string;
  userId: string;
}): Promise<number> => {
  const { data } = await getMovieRateAPI({ movieId, userId });
  if (data.length === 0) {
    return 0;
  }
  return data[data.length - 1].rate;
};
