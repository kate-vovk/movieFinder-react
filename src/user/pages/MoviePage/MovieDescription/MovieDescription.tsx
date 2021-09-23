import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { useStyle } from './styles';

interface IMovieDescriptionProps {
  description: string;
}

export const MovieDescription: FunctionComponent<IMovieDescriptionProps> = ({ description }) => {
  const { t } = useTranslation(['MoviePage']);
  const classes = useStyle();

  return (
    <div>
      {description && (
        <div className={classes.descriptionMovie}>
          <h2 className={classes.descriptionMovieTitle}>{t('description')}</h2>
          <p className={classes.descriptionMovieText}>{description}</p>
        </div>
      )}
    </div>
  );
};
