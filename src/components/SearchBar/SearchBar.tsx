import { ChangeEvent, FunctionComponent, SyntheticEvent } from 'react';
import { Paper } from '@material-ui/core';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { SearchSelect } from '@/components/SearchSelect/SearchSelect';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import { searchOption } from '@/utils/interfaces/searchOption';
import { useStyle } from './styles';

interface IProps {
  searchQuery: string;
  selectParam: string;
  // isRequest: boolean;
  // setIsRequest: (bool: boolean) => void;
  getSearchQuery: (event: ChangeEvent<HTMLInputElement>) => void;
  changedSelectParam: (event: ChangeEvent<{ name: string; value: searchOption }>) => void;
}

export const SearchBar: FunctionComponent<IProps> = ({
  searchQuery,
  selectParam,
  // isRequest,
  getSearchQuery,
  changedSelectParam,
  // setIsRequest,
}) => {
  // const getParamsForSearchQuery = (event: SyntheticEvent<HTMLButtonElement, any>): void => {
  // event.preventDefault();
  // setIsRequest(!isRequest);
  // };

  const classes = useStyle();
  return (
    <Paper className={classes.container}>
      <SearchInput searchQuery={searchQuery} getSearchQuery={getSearchQuery} />
      <SearchSelect selectParam={selectParam} changedSelectParam={changedSelectParam} />
      <CustomButton name="search" buttonType="submit" />
      {/* onClick={getParamsForSearchQuery} */}
    </Paper>
  );
};
