import React, { ReactElement } from 'react';
import { Content } from '../Content/Content';
import { NavBar } from '../NavBar/NavBar';

interface IProps {
  children: ReactElement;
}

export const Layout = ({ children }: IProps): ReactElement => {
  return (
    <div>
      <NavBar />
      <Content>
        {children}
      </ Content>
    </div>
  );
};
