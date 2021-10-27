import { FunctionComponent, ChangeEvent } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { InputBlock } from '@/sharedComponents/InputBlock';
import { useStyles } from './styles';

interface ISearchUsersProps {
  setSearchQueryParams: (value: string) => void;
}

export const SearchUsers: FunctionComponent<ISearchUsersProps> = ({ setSearchQueryParams }) => {
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
      labelName="enter user email"
      labelClass={classes.label}
    />
  );
};
