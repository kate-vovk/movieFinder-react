import { Link, useHistory } from 'react-router-dom';
import { FunctionComponent, useState, useCallback } from 'react';
import { AppBar, Toolbar, Button, Badge } from '@material-ui/core';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import { isAuthorizedButtons } from '@/constants/navBarIsAuthrozedButtons';
import { useStyle } from './styles';

export const NavBar: FunctionComponent = () => {
  // isAuthorized will be moved to global store further
  const [isAuthorized, setAuthorized] = useState(false);
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
            {isAuthorizedButtons(isAuthorized).map((button) =>
              button.badge ? (
                <Badge badgeContent={button.badge} color="secondary">
                  <Button onClick={onClickCartHandler}>{button.name}</Button>
                </Badge>
              ) : (
                <Button onClick={() => setAuthorized(!isAuthorized)}>
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
