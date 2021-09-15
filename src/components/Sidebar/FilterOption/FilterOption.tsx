import { ListItem, Radio, FormControlLabel } from '@material-ui/core';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

export interface IFilterOptionProps {
  item: string;
}

export const FilterOption: FunctionComponent<IFilterOptionProps> = ({ item }) => {
  const { t } = useTranslation(['Filtration']);
  return (
    <ListItem key={item} role="listitem" button>
      <FormControlLabel value={item} control={<Radio />} label={t(item)} />
    </ListItem>
  );
};
