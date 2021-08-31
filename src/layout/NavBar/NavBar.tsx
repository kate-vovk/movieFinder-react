import { FunctionComponent, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Button, Badge } from '@material-ui/core';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import { useDispatch, useSelector } from 'react-redux';
import { CLIENT_PATHS } from '@/constants/constants';
import { isAuthorizedButtons } from '@/constants/navBarIsAuthrozedButtons';
import { isLoggedInSelector } from '@/selectors/auth';
import { cartSelector } from '@/selectors/cart';
import { logout } from '@/store/slices/authSlice';
import { useStyle } from './styles';

export const NavBar: FunctionComponent = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const history = useHistory();
  const dispatch = useDispatch();
  const { movies } = useSelector(cartSelector);

  const goToCart = useCallback(() => {
    history.push(CLIENT_PATHS.cart);
  }, []);

  const classes = useStyle();
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to={CLIENT_PATHS.main} className={classes.link}>
            <MovieFilterIcon />
          </Link>
          <div className={classes.buttonsContainer}>
            {isAuthorizedButtons(isLoggedIn).map((button) =>
              button.badge ? (
                <Badge key={button.name} badgeContent={movies.length} color="secondary">
                  <Button onClick={goToCart}>{button.name}</Button>
                </Badge>
              ) : (
                <Button key={button.name} onClick={() => dispatch(logout())}>
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
