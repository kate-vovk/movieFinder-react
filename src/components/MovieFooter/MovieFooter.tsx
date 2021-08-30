import { FunctionComponent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { addMovieToCart, removeMovieFromCart } from '@/store/slices/cartSlice';
import { cartSelector } from '@/selectors/cart';
import { ModalAddMovieToCard } from '../ModalAddMovieToCard/ModalAddMovieToCard';
import { useStyle } from './styles';

interface IProps {
  movieId: number;
  price: number;
}

export const MovieFooter: FunctionComponent<IProps> = ({ movieId, price }: IProps) => {
  const dispatch = useDispatch();
  const { userId, movies, id } = useSelector(cartSelector);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const addMovieIdToCart = (): void => {
    if (movies?.find((mId: number) => mId === movieId)) {
      dispatch(removeMovieFromCart({ userId, movieId, id, movies }));
    } else {
      //dispatch(addMovieToCart({ userId, movieId, id, movies }));
      setIsOpenModal(true);
    }
  };

  const closeModal = () => {
    setIsOpenModal(false);
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
      <ModalAddMovieToCard closeModal={closeModal} isOpenModal={isOpenModal} />
    </div>
  );
};
