import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { IComment } from '@/interfaces/commentInterfaces';
import { MovieFeedbackElement } from './MovieFeedbackElement';
import { useStyle } from './styles';

export const MovieFeedbackList: FunctionComponent<{
  movieComments: IComment[];
  setEditedComment: (value: boolean) => void;
}> = ({ movieComments, setEditedComment }) => {
  const classes = useStyle();
  const { t } = useTranslation(['MoviePage']);
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>{t('Comments')}</h2>
      <ul className={classes.feedbackList}>
        {movieComments.map(({ id, userId, userName, comment, date, rate }: IComment) => (
          <MovieFeedbackElement
            key={id}
            commentId={id}
            userId={userId}
            userName={userName}
            commentText={comment}
            date={date}
            rate={rate}
            setEditedComment={setEditedComment}
          />
        ))}
      </ul>
    </>
  );
};
