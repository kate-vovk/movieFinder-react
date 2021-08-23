import { FunctionComponent, ReactElement } from 'react';
import { Content } from '@/layout/Content/Content';
import { NavBar } from '@/layout/NavBar/NavBar';
import { Footer } from '@/layout/Footer/Footer';
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
