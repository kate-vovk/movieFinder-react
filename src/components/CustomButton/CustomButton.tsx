import { FunctionComponent, SyntheticEvent } from 'react';
import { Button } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import CloseIcon from '@material-ui/icons/Close';

type TButtons = 'button' | 'submit' | 'reset';

interface ICustomButton {
  className?: string;
  onClick?: (event: SyntheticEvent<HTMLButtonElement, any>) => void;
  name: string;
  buttonType: TButtons;
}

export const CustomButton: FunctionComponent<ICustomButton> = ({
  buttonType,
  className = '',
  onClick,
  name,
}) => {
  const getIconByType = (type: string): JSX.Element | string => {
    switch (type) {
      case 'favorite':
        return <StarIcon />;
      case 'cart':
        return <ShoppingBasketIcon />;
      case 'search':
        return <SearchIcon />;
      case 'remove':
        return <ClearIcon />;
      case 'buy':
        return <ShoppingBasketIcon />;
      case 'back':
        return <KeyboardBackspaceIcon />;
      case 'close':
        return <CloseIcon />;
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
