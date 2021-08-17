import { FunctionComponent } from 'react';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { useStyle } from './styles';

export const MovieFooter: FunctionComponent = () => {
  const classes = useStyle();
  return (
    <div className={classes.footer}>
      <CustomButton
        name="favorite"
        buttonType="button"
        className={classes.favoritesButton}
        onClick={() => null}
      />
      <CustomButton name="cart" buttonType="button" className="" onClick={() => null} />
    </div>
  );
};
