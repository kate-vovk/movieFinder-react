import { Link } from 'react-router-dom';
import { FunctionComponent, useState } from 'react';
import { AppBar, Toolbar, Button, Badge } from '@material-ui/core';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import { isAuthorizedButtons } from '@/constants/navBarIsAuthrozedButtons';
import { useStyle } from './styles';

export const NavBar: FunctionComponent = () => {
  // isAuthorized will be moved to global store further
  const [isAuthorized, setAuthorized] = useState(false);

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
            {isAuthorizedButtons(isAuthorized).map((button) =>
              button.badge ? (
                <Badge badgeContent={button.badge} color="secondary">
                  <Button>
                    <Link to={button.to} className={classes.link}>
                      {button.name}
                    </Link>
                  </Button>
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
