import { FunctionComponent } from 'react';
import { useStyle } from './styles';

export const Favorites: FunctionComponent = () => {
  const classes = useStyle();

  return (
    <h1>Favorites</h1>
  );
};
