import { FunctionComponent, useState } from 'react';
import { useStyle } from './styles';
import { ModalDelete } from '@/admin/components/ModalDelete';
import { CustomButton } from '@/sharedComponents/CustomButton';

interface IDeleteButton {
  name: string;
  id: string;
}

export const DeleteButton: FunctionComponent<IDeleteButton> = ({ name, id }) => {
  const classes = useStyle();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (): void => {
    setIsModalOpen(true);
  };
  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CustomButton onClick={openModal} buttonType="button" className={classes.btn} name={name} />
      <ModalDelete isModalOpen={isModalOpen} id={id} closeModal={closeModal} />
    </>
  );
};
