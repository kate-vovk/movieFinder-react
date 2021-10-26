import { ChangeEvent, FunctionComponent } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { InputBlock } from '@/sharedComponents/InputBlock';
import { useStyles } from './styles';

interface ISearchProps {
  setSearchQueryParams: (value: string) => void;
}

export const SearchMovies: FunctionComponent<ISearchProps> = ({ setSearchQueryParams }) => {
  const classes = useStyles();
  const debounced = useDebouncedCallback((searchQueryParams) => {
    setSearchQueryParams(searchQueryParams);
  }, 1000);

  const changeSearchQueryParams = (event: ChangeEvent<HTMLInputElement>): void => {
    return debounced(event.target.value);
  };

  return (
    <InputBlock
      name="inputBlock"
      className={classes.input}
      type="text"
      onChange={changeSearchQueryParams}
      id="inputBlock"
      labelName="enter movie title"
      labelClass={classes.label}
    />
  );
};
