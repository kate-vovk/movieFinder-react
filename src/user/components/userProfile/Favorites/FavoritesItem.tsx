import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { TMovieFavorites } from '@/interfaces/favoritesInterface';
import { CLIENT_PATHS } from '@/user/constants';
import { CustomButton } from '@/user/components';
import { removeMovieFromFavorites } from '@/user/store/slices/favoritesSlice';
import { userIdSelector } from '@/user/store/selectors/auth';
import { useStyle } from './styles';

export const FavoritesItem: FunctionComponent<{ movie: TMovieFavorites }> = ({ movie }) => {
  const { id, coverUrl, title, description, productionCompany, cast, releaseDate, producer } =
    movie;
  const classes = useStyle();
  const dispatch = useDispatch();
  const { t } = useTranslation(['MoviePage']);

  const userId = useSelector(userIdSelector);

  const removeMovieIdFromFavorites = (): void => {
    dispatch(removeMovieFromFavorites({ userId, movieId: movie.id }));
  };
  return (
    <Card className={classes.container}>
      <Link to={`${CLIENT_PATHS.movies}/${id}`} className={classes.link}>
        <Typography className={classes.title} variant="h5">
          {title} ({new Date(releaseDate).getFullYear()})
        </Typography>
        <CardMedia className={classes.image} image={coverUrl} />
        <CardContent className={classes.description}>
          <Typography>
            <b>{t('productionCompanies')}</b>: {productionCompany}
          </Typography>
          <Typography>
            <b>{t('director')}</b>: {producer}
          </Typography>
          <Typography>
            <b>{t('actors')}</b>: {cast}
          </Typography>
          <Typography>
            <b>{t('description')}</b>: {description}
          </Typography>
        </CardContent>
      </Link>
      <CustomButton buttonType="button" onClick={removeMovieIdFromFavorites} name="remove" />
    </Card>
  );
};
