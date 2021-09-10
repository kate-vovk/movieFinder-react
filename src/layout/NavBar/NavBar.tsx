import { FunctionComponent, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Button, Badge } from '@material-ui/core';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { CLIENT_PATHS } from '@/constants/constants';
import { isAuthorizedButtons } from '@/constants/navBarIsAuthrozedButtons';
import { userSelector } from '@/selectors/auth';
import { cartSelector } from '@/selectors/cart';
import { logout } from '@/store/slices/authSlice';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { useStyle } from './styles';

export const NavBar: FunctionComponent = () => {
  const user = useSelector(userSelector);
  const history = useHistory();
  const dispatch = useDispatch();
  const { movies } = useSelector(cartSelector);

  const { t, i18n } = useTranslation(['AppBar']);

  const changeLanguage = (lang: string): void => {
    i18n.changeLanguage(lang);
  };

  const goToCart = useCallback(() => {
    history.push(CLIENT_PATHS.cart);
  }, []);

  const goToLogOut = useCallback(() => {
    dispatch(logout());
  }, []);

  const classes = useStyle({
    chosenLanguage: String(localStorage.getItem('i18nextLng')),
  });
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to={CLIENT_PATHS.main} className={classes.link}>
            <MovieFilterIcon />
          </Link>
          <div className={classes.buttonsContainer}>
            <ButtonGroup variant="text" aria-label="text primary button group">
              <CustomButton
                className={classes.enButton}
                onClick={() => changeLanguage('en-US')}
                name="En"
                buttonType="button"
              />
              <CustomButton
                className={classes.ruButton}
                onClick={() => changeLanguage('ru')}
                name="Ru"
                buttonType="button"
              />
            </ButtonGroup>
            {isAuthorizedButtons(Boolean(user)).map((button) =>
              button.badge ? (
                <Badge key={button.name} badgeContent={movies?.length} color="secondary">
                  <Button onClick={goToCart}>{t(button.name)}</Button>
                </Badge>
              ) : (
                <Button key={button.name} onClick={goToLogOut}>
                  <Link to={button.to} className={classes.link}>
                    {t(button.name)}
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
