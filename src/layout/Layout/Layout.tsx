import { FunctionComponent, ReactElement } from 'react';
import { Content, NavBar, Footer } from '@/layout';
import { useStyle } from './style';

interface IProps {
  children: ReactElement;
}

export const Layout: FunctionComponent<IProps> = ({ children }) => {
  const classes = useStyle();
  return (
    <div className={classes.layout}>
      <NavBar />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};
