import { FunctionComponent } from 'react';
import { CustomButton } from '@/components';
import { useStyle } from './styles';

interface IProps {
  price: number;
}

export const MoviePosterFooter: FunctionComponent<IProps> = ({ price }) => {
  const classes = useStyle();
  return (
    <div className={classes.posterFooter}>
      <CustomButton
        name="favorite"
        buttonType="button"
        className={classes.favoritesButton}
        onClick={() => null} // A handler will be added in the future
      />
      <CustomButton
        name="cart"
        buttonType="button"
        className={classes.cartButton}
        onClick={() => null} // A handler will be added in the future
      />
      <div className={classes.priceMovie}>
        <b className={classes.priceMovieCost}>{price}</b> $
      </div>
    </div>
  );
};
