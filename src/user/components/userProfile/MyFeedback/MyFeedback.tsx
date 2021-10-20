import { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { MyFeedbackItem } from './MyFeedbackItem';
import { MyFeedBackIsEmpty } from './MyFeedBackIsEmpty';
import { Circular } from '@/sharedComponents/Circular/Circular';
import { userIdSelector } from '@/user/store/selectors/auth';
import { GoToMainPageButton } from '@/sharedComponents/GoToMainPageButton';
import { getAllUserFeedback } from '@/user/businessLogic/feedback';
import { IFeedbackData } from '@/interfaces/feedbackInterface';
import { DataStatus } from '@/interfaces/status';
import { useStyle } from './styles';

export const MyFeedback: FunctionComponent = () => {
  const [feedbackData, setFeedbackData] = useState([] as IFeedbackData[]);
  const [feedbackStatus, setFeedbackStatus] = useState(DataStatus.initial);
  const [isEditedComment, setEditedComment] = useState<boolean>(false);
  const classes = useStyle();
  const { t } = useTranslation(['myFeedback']);
  const userId = useSelector(userIdSelector);

  const getUserFeedback = (): void => {
    setFeedbackStatus(DataStatus.loading);
    getAllUserFeedback(userId).then((data) => {
      if (data.length) {
        setFeedbackData(data);
        setFeedbackStatus(DataStatus.success);
      } else {
        setFeedbackStatus(DataStatus.empty);
      }
    });
    setEditedComment(false);
  };

  useEffect(() => {
    getUserFeedback();
  }, [isEditedComment]);

  if (feedbackStatus === DataStatus.loading) {
    return <Circular />;
  }

  if (feedbackStatus === DataStatus.empty) {
    return <MyFeedBackIsEmpty />;
  }

  return (
    <>
      <h1 className={classes.title}>{t('feedback')}</h1>
      {feedbackData.map((feedbackElement) => (
        <ul key={feedbackElement.title} className={classes.list}>
          <MyFeedbackItem feedbackElement={feedbackElement} setEditedComment={setEditedComment} />
        </ul>
      ))}
      <GoToMainPageButton />
    </>
  );
};
