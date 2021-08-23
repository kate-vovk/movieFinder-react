import { FunctionComponent, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Button, Badge } from '@material-ui/core';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import { useSelector, useDispatch } from 'react-redux';
import { PATHS } from '@/constants/constants';
import { isAuthorizedButtons } from '@/constants/navBarIsAuthrozedButtons';
import { isLoggedInSelector } from '@/selectors/auth';
import { addToCart } from '@/store/slices/cartSlice';
import { cartMoviesSelector } from '@/selectors/cart';
import { useStyle } from './styles';

export const NavBar: FunctionComponent = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const history = useHistory();
  const dispatch = useDispatch();
  const cartMovies = useSelector(cartMoviesSelector);

  const onClickCartHandler = useCallback(() => {
    history.push(PATHS.cart);
  }, []);
  // temporar function, will be moved to movie cards (to add to cart buttons) on the main page
  const onClickAddHandler = useCallback(() => {
    dispatch(addToCart(1));
    dispatch(addToCart(5));
    dispatch(addToCart(10));
    dispatch(addToCart(15));
  }, []);
  const classes = useStyle();
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to={PATHS.main} className={classes.link}>
            <MovieFilterIcon />
          </Link>
          <div className={classes.buttonsContainer}>
            <Button onClick={onClickAddHandler}>Temp Button For Adding Movies To Cart</Button>
            {isAuthorizedButtons(isLoggedIn).map((button) =>
              button.badge ? (
                <Badge key={button.name} badgeContent={cartMovies.length} color="secondary">
                  <Button onClick={onClickCartHandler}>{button.name}</Button>
                </Badge>
              ) : (
                <Button
                  key={button.name}
                  onClick={() => {
                    // set isLoggedIn to false
                  }}
                >
                  <Link to={button.to} className={classes.link}>
                    {button.name}
                  </Link>
                </Button>
              ),
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
