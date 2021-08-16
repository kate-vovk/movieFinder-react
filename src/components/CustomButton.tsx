import { Button, SvgIconProps } from '@material-ui/core';
import { ReactElement } from 'react';

interface Props {
  WrappedIcon: (props: SvgIconProps) => JSX.Element;
  className: any;
  onClick: () => void;
}

export const CustomButton = (props: Props): ReactElement => {
  const { className, WrappedIcon, onClick } = props;
  return (
    <Button className={className} onClick={onClick}>
      <WrappedIcon />
    </Button>
  );
};
