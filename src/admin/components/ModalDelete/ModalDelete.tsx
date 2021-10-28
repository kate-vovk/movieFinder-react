import { Box, Modal, Typography } from '@material-ui/core';
import { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CustomButton } from '@/sharedComponents/CustomButton';
import { useStyles } from './styles';
import { deleteMovieFromServer } from '@/admin/businessLogic/movies';
import { DataStatus } from '@/admin/interfaces';
import { Circular } from '@/sharedComponents/Circular/Circular';
import { TableErrors } from '@/admin/components/shared/TableErrors';
import { CLIENT_PATHS } from '@/admin/constants';

interface IModalDelete {
  isModalOpen: boolean;
  closeModal: () => void;
  id: string;
}

export const ModalDelete: FunctionComponent<IModalDelete> = ({ isModalOpen, closeModal, id }) => {
  const classes = useStyles();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState('');
  const [dataStatus, setDataStatus] = useState(DataStatus.initial);

  const deleteMovie = (): void => {
    setDataStatus(DataStatus.loading);
    deleteMovieFromServer(id)
      .then(() => {
        setDataStatus(DataStatus.success);
        closeModal();
        history.push(CLIENT_PATHS.admin);
      })
      .catch((error: { message: string }) => {
        setErrorMessage(error.message);
        setDataStatus(DataStatus.error);
      });
  };

  const renderData = (): JSX.Element => {
    if (dataStatus === DataStatus.loading) {
      return <Circular />;
    }
    if (dataStatus === DataStatus.error) {
      return <TableErrors errorMessage={errorMessage} />;
    }

    return (
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modalBox}>
          <Typography variant="h6" component="h1">
            Are you sure? <br />
            This action will remove the movie from the server!!
          </Typography>
          <div className={classes.modalFooter}>
            <CustomButton
              name="NO"
              buttonType="button"
              className={classes.modalButton}
              onClick={closeModal}
            />
            <CustomButton
              name="YES"
              buttonType="button"
              className={classes.modalButton}
              onClick={deleteMovie}
            />
          </div>
        </Box>
      </Modal>
    );
  };
  return renderData();
};
