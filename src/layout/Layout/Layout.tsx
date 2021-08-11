import React, { ReactElement } from 'react';
import { Content } from '../Content/Content';
import { NavBar } from '../NavBar/NavBar';
import { Footer } from '../Footer/Footer';
interface IProps {
  children: ReactElement;
}

export const Layout = ({ children }: IProps): ReactElement => {
  return (
    <div style={{width:"100%", height:"100vh", display: "flex", flexDirection: "column"}}>
      <NavBar />
      <Content>
        {children}
      </ Content>
      <Footer />
    </div>
  );
};
