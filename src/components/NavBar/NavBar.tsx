import { NavLink } from 'react-router-dom';
import React, { FunctionComponent } from 'react';
import { Movies } from '../Movies/Movies';

export const NavBar: FunctionComponent = () => {
  return (
    <div>
      <NavLink to="signup"> SignUp </NavLink>
      <NavLink to="signin"> SignIn </NavLink>
      <NavLink to="movies"> Movies </NavLink>
    </div>
  );
};
