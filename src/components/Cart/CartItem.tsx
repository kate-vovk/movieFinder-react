import { FunctionComponent } from 'react';
import { ListItem, ListItemIcon, Paper, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import EuroIcon from '@material-ui/icons/Euro';
import { useHistory } from 'react-router-dom';
import { removeMovieFromCart } from '@/store/slices/cartSlice';
import { CLIENT_PATHS } from '@/constants/constants';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { IMovie } from '@/utils/interfaces/cartInterfaces';
import { cartSelector } from '@/selectors/cart';
import { useStyle } from './styles';

export const CartItem: FunctionComponent<{ movie: IMovie }> = ({ movie }) => {
  const { id, cover, title, price, description } = movie;
  const classes = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();

  const { userId, movies, id: cartId } = useSelector(cartSelector);

  const removeMovieIdFromCart = (): void => {
    dispatch(removeMovieFromCart({ userId, movieId: id, id: cartId, movies }));
  };
  const goToDetailedView = (): void => {
    history.push(`${CLIENT_PATHS.movies}/${id}`);
  };
  return (
    <ListItem className={classes.container} component={Paper}>
      <ListItemIcon className={classes.image}>
        <img src={cover} />
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
};
