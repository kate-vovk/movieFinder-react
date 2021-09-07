import { FunctionComponent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { ModalAddMovieToCard } from '@/components/ModalAddMovieToCard/ModalAddMovieToCard';
import { removeMovieFromCart } from '@/store/slices/cartSlice';
import { cartSelector } from '@/selectors/cart';
import { userSelector } from '@/selectors/auth';
import { ICartMovieState } from '@/utils/interfaces/cartInterfaces';
import { useStyle } from './styles';

interface IMovieFooterProps {
  movieId: string;
  price: number;
}

export const MovieFooter: FunctionComponent<IMovieFooterProps> = ({ movieId, price }) => {
  const dispatch = useDispatch();
  const { movies, id } = useSelector(cartSelector);
  const { id: userId } = useSelector(userSelector);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const addMovieIdToCart = (): void => {
    if (movies.find((movie: ICartMovieState) => movie.movieId === movieId)) {
      dispatch(removeMovieFromCart({ userId, movieId, id, movies }));
    } else {
      setIsOpenModal(true);
    }
  };

  const closeModal = (): void => {
    setIsOpenModal(false);
  };

  const classes = useStyle({
    isIncluded: Boolean(movies.find((movie: ICartMovieState) => movie.movieId === movieId)),
  });
  return (
    <div className={classes.footer}>
      <CustomButton name="favorite" buttonType="button" className={classes.favoritesButton} />
      <CustomButton
        name="cart"
        buttonType="button"
        onClick={addMovieIdToCart}
        className={classes.addToCartButton}
      />
      <Typography className={classes.price} color="textSecondary" gutterBottom>
        {price} $
      </Typography>
      <ModalAddMovieToCard
        movieId={movieId}
        price={price}
        isOpenModal={isOpenModal}
        closeModal={closeModal}
      />
    </div>
  );
};
