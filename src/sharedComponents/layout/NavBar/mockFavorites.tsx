import { useHistory } from 'react-router-dom';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';

// TODO Temporary solution. In the future, add page for this features

export const mockFavorites: FunctionComponent = () => {
  const { t } = useTranslation(['mockFavorites']);
  const history = useHistory();
  const goToBack = (): void => {
    history.push('/');
  };
  return (
    <>
      <h2>{t('favoritesPage')}</h2>
      <Button color="primary" variant="contained" type="button" onClick={goToBack}>
        {t('goBack')}
      </Button>
    </>
  );
};