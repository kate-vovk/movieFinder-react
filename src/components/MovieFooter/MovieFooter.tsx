import { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { removeMovieFromCart } from '@/store/slices/cartSlice';
import { showModal } from '@/store/slices/modalSlice';
import { cartSelector } from '@/selectors/cart';
import { userSelector } from '@/selectors/auth';
import { ICartMovieState } from '@/utils/interfaces/cartInterfaces';
import { modalTypes } from '@/constants/modalTypes';
import { useStyle } from './styles';

interface IMovieFooterProps {
  movieId: string;
  price: number;
}

export const MovieFooter: FunctionComponent<IMovieFooterProps> = ({ movieId, price }) => {
  const dispatch = useDispatch();
  const { movies, id } = useSelector(cartSelector);
  const userId = useSelector(userSelector);
  const modalType = modalTypes.modalMovieCart;
  const modalProps = { movieId, price };

  const addMovieIdToCart = (): void => {
    if (movies?.find((movie: ICartMovieState) => movie.movieId === movieId)) {
      dispatch(removeMovieFromCart({ userId, movieId, id, movies }));
    } else {
      dispatch(showModal({ modalType, modalProps }));
    }
  };

  const classes = useStyle({
    isIncluded: Boolean(movies?.find((movie: ICartMovieState) => movie.movieId === movieId)),
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
    </div>
  );
};
