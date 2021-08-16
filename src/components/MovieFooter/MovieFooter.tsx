import { FunctionComponent } from 'react';
import StarIcon from '@material-ui/icons/Star';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { CustomButton } from '@/components/CustomButton';
import { useStyle } from './styles';

export const MovieFooter: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <div className={classes.footer}>
      <CustomButton
        className={classes.favoritesButton}
        WrappedIcon={StarIcon}
        onClick={() => null}
      />
      <CustomButton className="" WrappedIcon={ShoppingBasketIcon} onClick={() => null} />
    </div>
  );
};
