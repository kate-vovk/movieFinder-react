import { Button } from '@material-ui/core';
import { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { SERVER_PATHS } from '@/admin/constants';
import { useStyle } from './styles';

type TButtons = 'button' | 'submit' | 'reset';

interface IEditButton {
  buttonType: TButtons;
  name: string;
  id: string;
}

export const EditButton: FunctionComponent<IEditButton> = ({ name, buttonType, id }) => {
  const classes = useStyle();
  const history = useHistory();
  const pushToMoviePage = (): void => {
    history.push(`${SERVER_PATHS.movies}/${id}`);
  };
  return (
    <Button onClick={pushToMoviePage} type={buttonType} className={classes.btn}>
      {name}
    </Button>
  );
};
