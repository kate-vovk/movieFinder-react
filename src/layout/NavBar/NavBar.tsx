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
import { useTranslation } from 'react-i18next';
import { useStyle } from './styles';

export const NavBar: FunctionComponent = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const history = useHistory();
  const dispatch = useDispatch();
  const { movies } = useSelector(cartSelector);

  const { t, i18n } = useTranslation(['AppBar']);
  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng);
  };

  const goToCart = useCallback(() => {
    history.push(CLIENT_PATHS.cart);
  }, []);

  const goToLogOut = useCallback(() => {
    dispatch(logout());
  }, []);

  const classes = useStyle();
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to={CLIENT_PATHS.main} className={classes.link}>
            <MovieFilterIcon />
          </Link>
          <Button onClick={() => changeLanguage('en')}>En</Button>
          <Button onClick={() => changeLanguage('ru')}>Ru</Button>
          <div className={classes.buttonsContainer}>
            {isAuthorizedButtons(isLoggedIn).map((button) =>
              button.badge ? (
                <Badge key={button.name} badgeContent={movies.length} color="secondary">
                  <Button onClick={goToCart}>{t(`AppBar:${button.name}`)}</Button>
                </Badge>
              ) : (
                <Button key={button.name} onClick={goToLogOut}>
                  <Link to={button.to} className={classes.link}>
                    {t(`AppBar:${button.name}`)}
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
