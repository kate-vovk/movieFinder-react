import { FunctionComponent } from 'react';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { Typography } from '@material-ui/core';
import { useStyle } from './styles';

interface IProps {
  price: number;
  id: number;
}

export const openModal = (movieId: number): number => {
  return movieId;
};

export const MovieFooter: FunctionComponent<IProps> = ({ price, id }) => {
  const classes = useStyle();
  return (
    <div className={classes.footer}>
      <CustomButton name="favorite" buttonType="button" className={classes.favoritesButton} />
      <CustomButton name="cart" buttonType="button" onClick={openModal(id)} />
      <Typography className={classes.price} color="textSecondary" gutterBottom>
        {price} $
      </Typography>
    </div>
  );
};
