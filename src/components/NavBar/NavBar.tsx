import { Link } from 'react-router-dom';
import React, { FunctionComponent } from 'react';

export const NavBar: FunctionComponent = () => {
  return (
    <div>
      <Link to="signup"> SignUp </Link>
      <Link to="signin"> SignIn </Link>
    </div>
  );
};
