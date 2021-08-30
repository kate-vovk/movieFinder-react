import { FunctionComponent } from 'react';
import { Modal, Fade, Backdrop } from '@material-ui/core';
import { useStyles } from './styles';

interface IProps {
  isOpenModal: boolean;
  closeModal: () => void;
}

export const ModalAddMovieToCard: FunctionComponent<IProps> = ({ isOpenModal, closeModal }) => {
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
          <h2>Transition modal</h2>
          <p>react-transition-group animates me.</p>
        </div>
      </Fade>
    </Modal>
  );
};
