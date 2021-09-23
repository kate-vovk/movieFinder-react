import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';

export const SearchUsers: FunctionComponent = () => {
  const { t } = useTranslation(['AdminPanel']);
  const classes = useStyles();
  return (
    <form>
      <label />
      {/* stub for normal search, correct later */}
      <input placeholder={t('enterUserEmail')} className={classes.usersSearch} />
    </form>
  );
};
