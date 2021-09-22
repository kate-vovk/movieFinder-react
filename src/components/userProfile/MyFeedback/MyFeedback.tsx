import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useStyle } from './styles';

export const MyFeedback: FunctionComponent = () => {
  const { t } = useTranslation(['UserPage']);
  const classes = useStyle();

  return <h1 className={classes.title}>{t('My feedback')}</h1>;
};
