import { ListItem, Radio, FormControlLabel } from '@material-ui/core';
import { FunctionComponent, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { addFilterOption, removeLastFilterOption } from '@/store/slices/moviesSlice';

export interface IFilterOptionProps {
  filterParam: string;
  query: string;
  filterOption: string;
  setOption: (value: string) => void;
}

export const FilterOption: FunctionComponent<IFilterOptionProps> = ({
  filterParam,
  query,
  filterOption,
  setOption,
}) => {
  const { t } = useTranslation(['Filtration']);
  const dispatch = useDispatch();

  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    if ((event.target as HTMLInputElement).value === filterOption) {
      dispatch(removeLastFilterOption(filterParam));
      setOption('');
    } else {
      dispatch(
        addFilterOption({ filterParam, filterOption: (event.target as HTMLInputElement).value }),
      );
      setOption((event.target as HTMLInputElement).value);
    }
  };

  return (
    <ListItem key={query} role="listitem" button>
      <FormControlLabel value={query} control={<Radio onClick={handleClick} />} label={t(query)} />
    </ListItem>
  );
};
