import { FunctionComponent } from 'react';
import StarIcon from '@material-ui/icons/Star';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Button } from '@material-ui/core';
import { useStyle } from './styles';

export const MovieFooter: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <div className={classes.footer}>
      <Button className={classes.favoritesButton}>
        <StarIcon />
      </Button>
      <Button>
        <ShoppingBasketIcon />
      </Button>
    </div>
  );
};
