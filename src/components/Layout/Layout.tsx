import React, { ReactElement } from 'react';
import { NavBar } from '../NavBar/NavBar';

interface IProps {
  children: ReactElement;
}

export const Layout = ({ children }: IProps): ReactElement => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};
