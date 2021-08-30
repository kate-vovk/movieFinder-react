import { FunctionComponent, useState } from 'react';
import { Modal, Fade, Backdrop } from '@material-ui/core';
import { useStyles } from './styles';

export const ModalAddMovieToCard: FunctionComponent = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2>Transition modal</h2>
            <p>react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
    </>
  );
};
