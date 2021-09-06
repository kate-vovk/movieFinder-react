import { FunctionComponent } from 'react';
import { Modal, Fade, Backdrop } from '@material-ui/core';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { useStyles } from './styles';
import { ModalForm } from './ModalForm';

interface IModalAddMovieToCardProps {
  movieId: string;
  price: number;
  isOpenModal: boolean;
  closeModal: () => void;
}

export const ModalAddMovieToCard: FunctionComponent<IModalAddMovieToCardProps> = ({
  movieId,
  price,
  isOpenModal,
  closeModal,
}) => {
  const classes = useStyles();

  return (
    <Modal
      open={isOpenModal}
      onClose={closeModal}
      className={classes.modal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpenModal}>
        <div className={classes.paper}>
          <CustomButton
            name="close"
            buttonType="button"
            className={classes.modalClose}
            onClick={closeModal}
          />

          <ModalForm movieId={movieId} price={price} closeModal={closeModal} />
        </div>
      </Fade>
    </Modal>
  );
};
