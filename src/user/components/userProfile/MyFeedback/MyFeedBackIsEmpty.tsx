import { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { GoToMainPageButton } from '@/sharedComponents/GoToMainPageButton';
import { useStyle } from './styles';

export const MyFeedBackIsEmpty: FunctionComponent = () => {
  const classes = useStyle();
  const { t } = useTranslation(['myFeedback']);

  return (
    <div className={classes.feedbackIsEmpty}>
      <h1 className={classes.title}>{t('feedback')}</h1>
      <Typography>{t('noFeedback')}</Typography>
      <GoToMainPageButton />
    </div>
  );
};
