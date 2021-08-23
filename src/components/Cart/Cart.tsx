import { FunctionComponent, useCallback } from 'react';
import { List, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import EuroIcon from '@material-ui/icons/Euro';
import { cartMoviesSelector } from '@/selectors/cart';
import { sendData } from '@/store/slices/cartSlice';
import { userSelector } from '@/selectors/auth';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { CartItem } from './CartItem';
import { useStyle } from './styles';
import { CartIsEmpty } from './CartIsEmpty';

export const Cart: FunctionComponent = () => {
  const history = useHistory();
  const cartMovies = useSelector(cartMoviesSelector);
  const { id } = useSelector(userSelector);

  const dispatch = useDispatch();

  const classes = useStyle();

  const onClickGoBackHandler = useCallback(() => {
    history.goBack();
  }, []);
  const onClickBuyHandler = (): void => {
    dispatch(sendData({ user: id, movies: cartMovies.map((movieId) => movieId.id) }));
    history.push('/');
  };
  const getTotalPrice = (): number =>
    cartMovies.reduce((accumulator, { price }) => accumulator + price, 0);
  return (
    <div>
      {!cartMovies.length ? (
        <CartIsEmpty />
      ) : (
        <div className={classes.cartContainer}>
          <List>
            {cartMovies.map((movie) => (
              <CartItem
                id={movie.id}
                title={movie.title}
                description={movie.description}
                cover={movie.cover}
                price={movie.price}
              />
            ))}
          </List>
          <div className={classes.buttonsContainer}>
            <CustomButton buttonType="button" onClick={onClickGoBackHandler} name="back" />
            <CustomButton
              buttonType="button"
              className={classes.buyButton}
              onClick={onClickBuyHandler}
              name="Buy"
            />
            <div className={classes.priceContainer}>
              <Typography>Total Price: &nbsp; </Typography>
              <Typography className={classes.priceContainer}>
                {getTotalPrice()} <EuroIcon fontSize="small" />
              </Typography>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
