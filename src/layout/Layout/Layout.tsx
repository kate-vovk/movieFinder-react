import React, { ReactElement } from 'react';
import { Content } from '../Content/Content';
import { NavBar } from '../NavBar/NavBar';
import { Footer } from '../Footer/Footer';
import { useStyle } from './style';

interface IProps {
  children: ReactElement;
}

export const Layout = ({ children }: IProps): ReactElement => {
  const classes = useStyle();
  return (
    <div className={classes.layout}>
      <NavBar />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};
