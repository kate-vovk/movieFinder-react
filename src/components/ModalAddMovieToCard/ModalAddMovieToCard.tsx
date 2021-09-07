import { FunctionComponent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Fade, Backdrop } from '@material-ui/core';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { modalSelector } from '@/selectors/modal';
import { hideModal } from '@/store/slices/modalSlice';
import { useStyles } from './styles';
import { ModalForm } from './ModalForm';

interface IModalAddMovieToCardProps {
  movieId: string;
  price: number;
}

export const ModalAddMovieToCard: FunctionComponent<IModalAddMovieToCardProps> = ({
  movieId,
  price,
}) => {
  const dispatch = useDispatch();
  const { modalType } = useSelector(modalSelector);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const classes = useStyles();

  const closeModal = (): void => {
    dispatch(hideModal(modalType));
  };

  useEffect(() => {
    if (modalType) {
      setIsOpenModal(true);
    } else {
      setIsOpenModal(false);
    }
  }, [modalType]);

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
