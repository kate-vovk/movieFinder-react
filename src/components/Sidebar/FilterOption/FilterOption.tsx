import { ListItem, Radio, FormControlLabel } from '@material-ui/core';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

export interface IFilterOptionProps {
  query: string;
  param: string;
}

export const FilterOption: FunctionComponent<IFilterOptionProps> = ({ query, param }) => {
  console.log('query, param', query, param);
  const { t } = useTranslation(['Filtration']);
  return (
    <ListItem key={query} role="listitem" button>
      <FormControlLabel value={query} control={<Radio />} label={t(query)} />
    </ListItem>
  );
};
