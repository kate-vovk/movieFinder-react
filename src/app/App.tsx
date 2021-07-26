// eslint-disable-next-line no-use-before-define
import React from 'react';
import { RegisterForm } from '../pages/registerForm/RegisterForm';
import { useStyle } from './styles';

export function App(): JSX.Element {
  const classes = useStyle();

  return (
    <div className="App">
      <div className={classes.registerForm}>
        <RegisterForm />
      </div>
    </div>
  );
}
