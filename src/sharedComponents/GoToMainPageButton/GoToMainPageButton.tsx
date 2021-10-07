import { Button } from '@material-ui/core';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

export const GoToMainPageButton: FunctionComponent = () => {
  const history = useHistory();
  const { t } = useTranslation(['UserPage']);

  const goToMainPage = (): void => {
    history.push('/');
  };

  return (
    <Button color="primary" variant="contained" type="button" onClick={goToMainPage}>
      {t('goHome')}
    </Button>
  );
};
