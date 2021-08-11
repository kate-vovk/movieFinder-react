import { Link } from 'react-router-dom';
import React, { FunctionComponent } from 'react';
import { AppBar, Toolbar, Button, Badge } from '@material-ui/core';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import { useStyle } from './styles';

export const NavBar: FunctionComponent = () => {
  const [signInForm, openSignInForm] = React.useState(false);
  const classes = useStyle();
  return (
    <div>
      <AppBar position="fixed" style={{ backgroundColor: 'lightBlue' }}>
        <Toolbar>
          <Button
            onClick={() => {
              if (signInForm) {
                openSignInForm(false);
              }
            }}
          >
            <Link to="/" className={classes.link}>
              <MovieFilterIcon />
            </Link>
          </Button>
          <div className={classes.buttonsContainer}>
            <Badge badgeContent={2} color="secondary">
              <Button>
                <Link to="cart" className={classes.link}>
                  Cart
                </Link>
              </Button>
            </Badge>

            <Button>
              <Link to="signup" className={classes.link}>
                SignUp
              </Link>
            </Button>
            {signInForm ? (
              <Button
                onClick={() => {
                  openSignInForm(false);
                }}
              >
                <Link to="/" className={classes.link}>
                  SignOut
                </Link>
              </Button>
            ) : (
              <Button
                onClick={() => {
                  openSignInForm(true);
                }}
              >
                <Link to="signin" className={classes.link}>
                  SignIn
                </Link>
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
