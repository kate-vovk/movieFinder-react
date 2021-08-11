import { Link } from 'react-router-dom';
import React, { FunctionComponent } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

export const NavBar: FunctionComponent = () => {
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <Link to="signup"> SignUp </Link>
          <Link to="signin"> SignIn </Link>
        </Toolbar>
      </AppBar>
      
    </div>
  );
};
