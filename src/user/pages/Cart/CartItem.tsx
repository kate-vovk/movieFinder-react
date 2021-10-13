import { FunctionComponent } from 'react';
import { ListItem, ListItemIcon, Paper, Typography } from '@material-ui/core';
import EuroIcon from '@material-ui/icons/Euro';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CLIENT_PATHS } from '@/user/constants';
import { CustomButton } from '@/user/components';
import { IMovie } from '@/interfaces/movieInterface';
import { useStyle } from './styles';
import { removeMovieFromCart } from '@/user/store/slices/cartSlice';
import { userIdSelector } from '@/user/store/selectors/auth';
import { cartSelector } from '@/user/store/selectors/cart';
import { DataStatus } from '@/interfaces/status';

export const CartItem: FunctionComponent<{ movie: IMovie }> = ({ movie }) => {
  const { id, coverUrl, title, price, description } = movie;
  const classes = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();

  const userId = useSelector(userIdSelector);
  const { status } = useSelector(cartSelector);

  const removeMovieIdFromCart = (): void => {
    dispatch(removeMovieFromCart({ userId, movieId: movie.id }));
  };
  const goToDetailedView = (): void => {
    history.push(`${CLIENT_PATHS.movies}/${id}`);
  };

  // if (status === DataStatus.success) {
  return (
    <ListItem className={classes.container} component={Paper}>
      <ListItemIcon className={classes.image}>
        <img src={coverUrl} />
      </ListItemIcon>
      <div className={`${classes.content} ${classes.titleDescriptionContent}`}>
        <Typography onClick={goToDetailedView} className={classes.title}>
          {title}
        </Typography>
        <Typography onClick={goToDetailedView} className={classes.description}>
          {description}
        </Typography>
      </div>
      <div className={`${classes.content} ${classes.removePriceContent}`}>
        <CustomButton buttonType="button" onClick={removeMovieIdFromCart} name="remove" />
        <div className={classes.priceContainer}>
          <Typography variant="h6">{price}</Typography>
          <EuroIcon fontSize="small" />
        </div>
      </div>
    </ListItem>
  );
  // }
  // return null;
};
