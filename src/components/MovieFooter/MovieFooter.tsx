import { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { addMovieToCart, removeMovieFromCart } from '@/store/slices/cartSlice';
import { cartSelector } from '@/selectors/cart';
import { Typography } from '@material-ui/core';
import { useStyle } from './styles';

interface IProps {
  movieId: number;
  price: number;
}

export const MovieFooter: FunctionComponent<IProps> = ({ movieId, price }: IProps) => {
  const dispatch = useDispatch();
  const { userId, movies, id } = useSelector(cartSelector);

  const addMovieIdToCart = (): void => {
    if (movies?.find((mId: number) => mId === movieId)) {
      dispatch(removeMovieFromCart({ userId, movieId, id, movies }));
    } else {
      dispatch(addMovieToCart({ userId, movieId, id, movies }));
    }
  };

  const classes = useStyle({
    isIncluded: movies?.find((mId: number) => mId === movieId),
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
