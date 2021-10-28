import { FunctionComponent, useCallback } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { CLIENT_PATHS } from '@/user/constants';
import { isAuthorizedButtons } from '@/user/constants/navBarIsAuthrozedButtons';
import { userIdSelector } from '@/user/store/selectors/auth';
import { cartSelector } from '@/user/store/selectors/cart';
import { CustomButton, NavBarButtons } from '@/user/components';
import logo from '@/assets/icons/logo.svg';
import { clearMovieState } from '@/user/store/slices/moviesSlice';
import { useStyle } from './styles';

export const NavBar: FunctionComponent = () => {
  const languageFromLocalStorage = String(localStorage.getItem('i18nextLng'));
  const userId = useSelector(userIdSelector);
  const history = useHistory();
  const location = useLocation();
  const { movies } = useSelector(cartSelector);
  const dispatch = useDispatch();
  const { i18n } = useTranslation(['AppBar']);

  const changeLanguage = (lang: string): void => {
    i18n.changeLanguage(lang);
  };

  const goToCart = useCallback(() => {
    history.push(CLIENT_PATHS.cart);
  }, []);

  const goToMainPage = (): void => {
    dispatch(clearMovieState());
    history.push(CLIENT_PATHS.main);
  };

  const classes = useStyle({
    chosenLanguage:
      languageFromLocalStorage === 'en-US'
        ? languageFromLocalStorage.split('-')[0]
        : languageFromLocalStorage,
  });
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to={CLIENT_PATHS.main} className={classes.link} onClick={goToMainPage}>
            <img src={logo} className={classes.logo} alt="logo" />
          </Link>
          <div className={classes.buttonsContainer}>
            <ButtonGroup variant="text" aria-label="text primary button group">
              <CustomButton
                className={classes.enButton}
                onClick={() => changeLanguage('en')}
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
            {![CLIENT_PATHS.signin, CLIENT_PATHS.signup].includes(location.pathname) && (
              <NavBarButtons />
            )}
            {isAuthorizedButtons(Boolean(userId), location.pathname === CLIENT_PATHS.signin).map(
              (button) =>
                button.badge ? (
                  <CustomButton
                    key={button.name}
                    name={button.name}
                    buttonType="button"
                    onClick={goToCart}
                    badgeContent={movies.length}
                  />
                ) : (
                  <CustomButton
                    key={button.name}
                    name={button.name}
                    buttonType="button"
                    onClick={() => history.push(button.to)}
                  />
                ),
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
