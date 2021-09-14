import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { cartSelector } from '@/selectors/cart';
import { IMovie } from '@/utils/interfaces/cartInterfaces';
import { useStyle } from './styles';
import { addMovieToCart, removeMovieFromCart } from '@/store/slices/cartSlice';
import { userSelector } from '@/selectors/auth';

interface IProps {
  movieId: string;
  price: number;
}

export const MovieFooter: FunctionComponent<IProps> = ({ movieId, price }) => {
  // TODO: mocked data, will be developed in the 'purchase option modal' part
  const PERIOD = 30;
  const QUALITY = 'HD';
  const dispatch = useDispatch();
  const { movies } = useSelector(cartSelector);
  const userId = useSelector(userSelector);
  const addMovieIdToCart = (): void => {
    if (movies.find((movie: IMovie) => movie.id === movieId)) {
      dispatch(removeMovieFromCart({ userId, movieId }));
    } else {
      dispatch(addMovieToCart({ userId, movieId, period: PERIOD, quality: QUALITY }));
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
