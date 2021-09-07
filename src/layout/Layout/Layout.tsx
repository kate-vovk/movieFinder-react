import { FunctionComponent, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Content } from '@/layout/Content/Content';
import { NavBar } from '@/layout/NavBar/NavBar';
import { Footer } from '@/layout/Footer/Footer';
import { modalSelector } from '@/selectors/modal';
import { ModalRoot } from '@/components/ModalRoot/ModalRoot';
import { useStyle } from './style';

interface IProps {
  children: ReactElement;
}

export const Layout: FunctionComponent<IProps> = ({ children }) => {
  const { modalType, modalProps } = useSelector(modalSelector);
  const classes = useStyle();

  return (
    <div className={classes.layout}>
      <NavBar />
      <Content>{children}</Content>
      <Footer />
      <ModalRoot modalType={modalType} modalProps={modalProps} />
    </div>
  );
};
