import { FunctionComponent } from 'react';
import { ModalAddMovieToCard } from '@/components/ModalAddMovieToCard/ModalAddMovieToCard';

interface IModalRootProps {
  modalType: string;
  modalProps: IModalProps;
}

interface IModalProps {
  movieId: string;
  price: number;
}

export const ModalRoot: FunctionComponent<IModalRootProps> = ({ modalType, modalProps }) => {
  switch (modalType) {
    case 'MODAL_MOVIE_CART':
      return <ModalAddMovieToCard movieId={modalProps.movieId} price={modalProps.price} />;
    default:
      return null;
  }
};
