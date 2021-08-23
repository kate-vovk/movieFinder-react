import { FunctionComponent } from 'react';
import { ListItem, ListItemIcon, Paper, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import EuroIcon from '@material-ui/icons/Euro';
import { useHistory } from 'react-router-dom';
import { removeFromCart } from '@/store/slices/cartSlice';
import { PATHS } from '@/constants/constants';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { IMovie } from '@/utils/interfaces/cartInterfaces';
import { useStyle } from './styles';

export const CartItem: FunctionComponent<IMovie> = ({ id, cover, title, price, description }) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();

  const onClickRemoveHandler = (): void => {
    dispatch(removeFromCart(id));
  };
  const onClickTitleDescriptionHandler = (): void => {
    history.push(`${PATHS.movies}/${id}`);
  };
  return (
    <ListItem className={classes.container} component={Paper}>
      <ListItemIcon className={classes.image}>
        <img src={cover} />
      </ListItemIcon>
      <div className={`${classes.content} ${classes.titleDescriptionContent}`}>
        <Typography onClick={onClickTitleDescriptionHandler} className={classes.title}>
          {title}
        </Typography>
        <Typography onClick={onClickTitleDescriptionHandler} className={classes.description}>
          {description}
        </Typography>
      </div>
      <div className={`${classes.content} ${classes.removePriceContent}`}>
        <CustomButton buttonType="button" onClick={onClickRemoveHandler} name="remove" />
        <div className={classes.priceContainer}>
          <Typography variant="h6">{price}</Typography>
          <EuroIcon fontSize="small" />
        </div>
      </div>
    </ListItem>
  );
};
