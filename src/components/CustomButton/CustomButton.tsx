import { Button } from '@material-ui/core';
import { ReactElement } from 'react';
import StarIcon from '@material-ui/icons/Star';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

interface Props {
  className: string;
  onClick: () => void;
  name: string;
  buttonType: 'button' | 'submit' | 'reset';
}

export const CustomButton = (props: Props): ReactElement => {
  const { buttonType, className, onClick, name } = props;
  const getIconByType = (type: string): JSX.Element | string => {
    switch (type) {
      case 'favorite':
        return <StarIcon />;
      case 'cart':
        return <ShoppingBasketIcon />;
      default:
        return type;
    }
  };
  return (
    <Button type={buttonType} className={className} onClick={onClick}>
      {getIconByType(name)}
    </Button>
  );
};
