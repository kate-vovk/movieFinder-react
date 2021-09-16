import { ListItem, Radio, FormControlLabel } from '@material-ui/core';
import { FunctionComponent, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { addFilterOption, removeLastFilterOption } from '@/store/slices/moviesSlice';

export interface IFilterOptionProps {
  param: string;
  query: string;
  option: string;
  setOption: (value: string) => void;
}

export const FilterOption: FunctionComponent<IFilterOptionProps> = ({
  param,
  query,
  option,
  setOption,
}) => {
  const { t } = useTranslation(['Filtration']);
  const dispatch = useDispatch();

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    if ((event.target as HTMLInputElement).value === option) {
      dispatch(removeLastFilterOption(param));
      setOption('');
    } else {
      dispatch(addFilterOption({ param, option: (event.target as HTMLInputElement).value }));
      setOption((event.target as HTMLInputElement).value);
    }
  };

  return (
    <ListItem key={query} role="listitem" button>
      <FormControlLabel value={query} control={<Radio onClick={handleClick} />} label={t(query)} />
    </ListItem>
  );
};
