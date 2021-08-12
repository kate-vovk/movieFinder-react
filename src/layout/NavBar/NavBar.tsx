import { Link } from 'react-router-dom';
import React, { FunctionComponent } from 'react';
import { AppBar, Toolbar, Button, Badge } from '@material-ui/core';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import { isAuthorizedButtons } from '@/constants/navBarIsAuthrozedButtons';
import { useStyle } from './styles';

export const NavBar: FunctionComponent = () => {
  // isAuthorized will be moved to global store further
  const [isAuthorized, setAuthorized] = React.useState(false);

  const onClickSetAuthorizedHandler = (): void => {
    setAuthorized(!isAuthorized);
  };
  const onClickLogoHandler = (): void => {
    if (!isAuthorized) {
      setAuthorized(false);
    }
  };
  const classes = useStyle();
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Button onClick={onClickLogoHandler}>
            <Link to="/" className={classes.link}>
              <MovieFilterIcon />
            </Link>
          </Button>
          <div className={classes.buttonsContainer}>
            {isAuthorizedButtons
              .filter((button) => isAuthorized === button.isAuthorized)
              .map((item) =>
                item.badge ? (
                  <Badge badgeContent={item.badge} color="secondary">
                    <Button>
                      <Link to={item.to} className={classes.link}>
                        {item.name}
                      </Link>
                    </Button>
                  </Badge>
                ) : (
                  <Button onClick={onClickSetAuthorizedHandler}>
                    <Link to={item.to} className={classes.link}>
                      {item.name}
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
