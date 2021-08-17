import { Link, useHistory } from 'react-router-dom';
import { FunctionComponent, useCallback } from 'react';
import { AppBar, Toolbar, Button, Badge } from '@material-ui/core';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import { isAuthorizedButtons } from '@/constants/navBarIsAuthrozedButtons';
import { isLoggedInSelector } from '@/selectors/auth';
import { useSelector } from 'react-redux';
import { useStyle } from './styles';

export const NavBar: FunctionComponent = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const history = useHistory();
  const onClickCartHandler = useCallback(() => {
    history.push('/cart');
  }, []);
  const classes = useStyle();
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to="/" className={classes.link}>
            <MovieFilterIcon />
          </Link>
          <div className={classes.buttonsContainer}>
            {isAuthorizedButtons(isLoggedIn).map((button) =>
              button.badge ? (
                <Badge key={button.name} badgeContent={button.badge} color="secondary">
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
