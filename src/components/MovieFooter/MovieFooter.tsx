import { FunctionComponent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { removeMovieFromCart } from '@/store/slices/cartSlice';
import { cartSelector } from '@/selectors/cart';
import { ModalAddMovieToCard } from '../ModalAddMovieToCard/ModalAddMovieToCard';
import { useStyle } from './styles';

interface IProps {
  movieId: string;
  price: number;
}

export const MovieFooter: FunctionComponent<IProps> = ({ movieId, price }: IProps) => {
  const dispatch = useDispatch();
  const { userId, movies, id } = useSelector(cartSelector);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const addMovieIdToCart = (): void => {
    if (movies?.find((mId: string) => mId === movieId)) {
      dispatch(removeMovieFromCart({ userId, movieId, id, movies }));
    } else {
      setIsOpenModal(true);
    }
  };

  const closeModal = (): void => {
    setIsOpenModal(false);
  };

  const classes = useStyle({
    isIncluded: movies?.find((mId: string) => mId === movieId),
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
