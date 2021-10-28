import { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { CLIENT_PATHS } from '@/admin/constants';
import { useStyle } from './styles';
import { CustomButton } from '@/sharedComponents/CustomButton';

interface IEditButton {
  name: string;
  id: string;
}

export const EditButton: FunctionComponent<IEditButton> = ({ name, id }) => {
  const classes = useStyle();
  const history = useHistory();
  const pushToMoviePage = (): void => {
    history.push(`${CLIENT_PATHS.admin}/editMovie/${id}`);
  };
  return (
    <CustomButton
      onClick={pushToMoviePage}
      buttonType="button"
      className={classes.btn}
      name={name}
    />
  );
};
