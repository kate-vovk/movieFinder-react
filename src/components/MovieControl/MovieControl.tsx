import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { removeMovieFromCart } from '@/store/slices/cartSlice';
import { showModal } from '@/store/slices/modalSlice';
import { cartSelector } from '@/selectors/cart';
import { userSelector } from '@/selectors/auth';
import { IMovie } from '@/utils/interfaces/cartInterfaces';
import { modalTypes } from '@/constants/modalTypes';

import { useStyle } from './styles';

interface IMovieControlProps {
  movieId: string;
  price: number;
}

export const MovieControl: FunctionComponent<IMovieControlProps> = ({ movieId, price }) => {
  const dispatch = useDispatch();
  const { movies } = useSelector(cartSelector);
  const { userId } = useSelector(userSelector);
  const modalType = modalTypes.modalMovieCart;
  const modalProps = { movieId, price };

  const addMovieIdToCart = (): void => {
    if (movies.find((movie: IMovie) => movie.id === movieId)) {
      dispatch(removeMovieFromCart({ userId, movieId }));
    } else {
      dispatch(showModal({ modalType, modalProps }));
    }
  };

  const classes = useStyle({
    isIncluded: Boolean(movies.find((movie: IMovie) => movie.id === movieId)),
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
