import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Fade, Backdrop } from '@material-ui/core';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { modalSelector } from '@/selectors/modal';
import { hideModal } from '@/store/slices/modalSlice';
import { ModalAddMovieToCard } from '@/components/ModalAddMovieToCard/ModalAddMovieToCard';
import { modalTypes } from '@/constants/modalTypes';
import { useStyles } from './styles';

export const ModalRoot: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { modalType, isModalOpen, modalProps } = useSelector(modalSelector);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const classes = useStyles();

  const closeModal = (): void => {
    dispatch(hideModal());
  };

  useEffect(() => {
    if (isModalOpen) {
      setIsOpenModal(true);
    } else {
      setIsOpenModal(false);
    }
  }, [isModalOpen]);

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
          {modalType === modalTypes.modalMovieCart && Object.keys(modalProps).length ? (
            <ModalAddMovieToCard
              movieId={modalProps.movieId}
              price={modalProps.price}
              closeModal={closeModal}
            />
          ) : null}
        </div>
      </Fade>
    </Modal>
  );
};
