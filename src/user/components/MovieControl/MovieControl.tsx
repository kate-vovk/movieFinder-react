import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { CustomButton } from '@/user/components';
import { showModal } from '@/user/store/slices/modalSlice';
import { cartSelector } from '@/user/store/selectors/cart';
import { userIdSelector } from '@/user/store/selectors/auth';
import { IMovie } from '@/interfaces/movieInterface';
import { useStyle, cartButtonTheme } from './styles';
import { removeMovieFromCart } from '@/user/store/slices/cartSlice';
import { modalTypes } from '@/user/constants/modalTypes';

interface IMovieControlProps {
  movieId: string;
  price: number;
}

export const MovieControl: FunctionComponent<IMovieControlProps> = ({ movieId, price }) => {
  const dispatch = useDispatch();
  const { movies, isLoading } = useSelector(cartSelector);
  const userId = useSelector(userIdSelector);
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
      <ThemeProvider theme={cartButtonTheme}>
        <CustomButton
          name="cart"
          buttonType="button"
          onClick={addMovieIdToCart}
          className={classes.addToCartButton}
          disabled={isLoading}
        />
      </ThemeProvider>
      <Typography className={classes.price} color="textSecondary" gutterBottom>
        {price} $
      </Typography>
    </div>
  );
};
