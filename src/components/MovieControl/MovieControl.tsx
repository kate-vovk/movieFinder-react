import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { CustomButton } from '@/components';
import { showModal } from '@/store/slices/modalSlice';
import { cartSelector } from '@/selectors/cart';
import { userSelector } from '@/selectors/auth';
import { IMovie } from '@/utils/interfaces/cartInterfaces';
import { useStyle, cartButtonTheme } from './styles';
import { removeMovieFromCart } from '@/store/slices/cartSlice';
import { modalTypes } from '@/constants/modalTypes';

interface IMovieControlProps {
  movieId: string;
  price: number;
}

export const MovieControl: FunctionComponent<IMovieControlProps> = ({ movieId, price }) => {
  const dispatch = useDispatch();
  const { movies, isLoading } = useSelector(cartSelector);
  const userId = useSelector(userSelector);
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
