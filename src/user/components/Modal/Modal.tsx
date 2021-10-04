import { FunctionComponent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal as ModalMUI, Fade, Backdrop } from '@material-ui/core';
import { CustomButton } from '@/sharedComponents/CustomButton';
import { modalSelector } from '@/user/store/selectors/modal';
import { hideModal } from '@/user/store/slices/modalSlice';
import { ModalAddMovieToCard } from '@/user/components/ModalAddMovieToCard';
import { modalTypes } from '@/user/constants/modalTypes';
import { useStyles } from './styles';

export const Modal: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { modalType, isModalOpen, modalProps } = useSelector(modalSelector);
  const classes = useStyles();

  const closeModal = (): void => {
    dispatch(hideModal());
  };

  return (
    <ModalMUI
      open={isModalOpen}
      onClose={closeModal}
      className={classes.modal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isModalOpen}>
        <div className={classes.paper}>
          <CustomButton
            name="close"
            buttonType="button"
            className={classes.modalClose}
            onClick={closeModal}
          />
          {modalType === modalTypes.modalMovieCart && modalProps.movieId && modalProps.price && (
            <ModalAddMovieToCard
              movieId={modalProps.movieId}
              price={modalProps.price}
              closeModal={closeModal}
            />
          )}
        </div>
      </Fade>
    </ModalMUI>
  );
};
