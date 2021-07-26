import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RegisterForm } from '../../pages/registerForm/RegisterForm';

export const Layout: FunctionComponent = () => {
  return (
    <Router>
      <RegisterForm />
    </Router>
  );
};
