import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';

export const Settings = (): ReactElement => {
  const { t } = useTranslation(['AdminPanel']);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{t('siteSettings')}</h2>
    </div>
  );
};
