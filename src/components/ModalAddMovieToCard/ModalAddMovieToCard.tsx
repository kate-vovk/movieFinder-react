import { FunctionComponent } from 'react';
import { Modal, Fade, Backdrop, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from './styles';
import { ModalForm } from './ModalForm';

interface IProps {
  movieId: number;
  price: number;
  isOpenModal: boolean;
  closeModal: () => void;
}

export const ModalAddMovieToCard: FunctionComponent<IProps> = ({
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
          <IconButton onClick={closeModal} aria-label="delete" className={classes.modalClose}>
            <CloseIcon />
          </IconButton>

          <ModalForm movieId={movieId} price={price} />
        </div>
      </Fade>
    </Modal>
  );
};
