import { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { addMovieToCart, removeMovieFromCart } from '@/store/slices/cartSlice';
import { cartSelector } from '@/selectors/cart';
import { IMovie } from '@/utils/interfaces/cartInterfaces';
import { useStyle } from './styles';
import { userSelector } from '@/selectors/auth';

interface IProps {
  movieId: string;
  price: number;
}

export const MovieFooter: FunctionComponent<IProps> = ({ movieId, price }) => {
  // TODO: mocked data, will be developed in the 'purchase option modal' part
  // const PERIOD = 30;
  // const QUALITY = 'HD';
  // const PRICE = 3;
  // const dispatch = useDispatch();
  const { movies } = useSelector(cartSelector);
  // const userId = useSelector(userSelector);
  const addMovieIdToCart = (): void => {
    // if (movies.find((movie: IMovie) => movie.id === movieId)) {
    //   dispatch(removeMovieFromCart({ userId, movieId, movies }));
    // } else {
    //   dispatch(
    //     addMovieToCart({
    //       userId,
    //       movies: [...movies, { movieId, period: PERIOD, quality: QUALITY, price: PRICE }],
    //     }),
    //   );
    // }
  };

  const classes = useStyle({
    isIncluded: Boolean(movies?.find((movie: IMovie) => movie.id === movieId)),
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
