import { FunctionComponent, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Badge, ButtonGroup } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { CLIENT_PATHS } from '@/constants';
import { isAuthorizedButtons } from '@/constants/navBarIsAuthrozedButtons';
import { userSelector } from '@/selectors/auth';
import { cartSelector } from '@/selectors/cart';
import { CustomButton, MenuButton } from '@/components';
import { userMenuLinks } from '@/constants/menuButton';
import logo from '@/assets/icons/logo.svg';
import { useStyle } from './styles';

export const NavBar: FunctionComponent = () => {
  const languageFromLocalStorage = String(localStorage.getItem('i18nextLng'));
  const user = useSelector(userSelector);
  const history = useHistory();
  const { movies } = useSelector(cartSelector);

  const { i18n } = useTranslation(['AppBar']);

  const changeLanguage = (lang: string): void => {
    i18n.changeLanguage(lang);
  };

  const goToCart = useCallback(() => {
    history.push(CLIENT_PATHS.cart);
  }, []);

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
          <Link to={CLIENT_PATHS.main} className={classes.link}>
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
            {isAuthorizedButtons(Boolean(user)).map((button) =>
              button.badge ? (
                <Badge key={button.name} badgeContent={movies?.length} color="secondary">
                  <MenuButton menuLink={userMenuLinks} />
                  <CustomButton buttonType="button" onClick={goToCart} name="cart" />
                </Badge>
              ) : (
                <CustomButton
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
