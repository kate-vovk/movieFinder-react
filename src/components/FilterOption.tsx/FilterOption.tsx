import { ListItem, ListItemText, ListItemIcon, Checkbox } from '@material-ui/core';
import { FunctionComponent } from 'react';

export interface IFilterOptionProps {
  item: string;
}

export const FilterOption: FunctionComponent<IFilterOptionProps> = ({ item }) => {
  return (
    <ListItem key={item} role="listitem" button>
      <ListItemIcon>
        <Checkbox tabIndex={-1} disableRipple />
      </ListItemIcon>
      <ListItemText id={item} primary={item} />
    </ListItem>
  );
};
