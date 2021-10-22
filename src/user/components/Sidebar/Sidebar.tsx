import { FunctionComponent, useCallback } from 'react';
import { Drawer, List, Toolbar } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { sidebarFilterNamesFields } from '@/user/constants/sidebarFilterNamesFields';
import { CustomAccordion } from './CustomAccordion';
import { clearMovieState, getMoviesListWithQuery } from '@/user/store/slices/moviesSlice';
import { CustomButton } from '@/sharedComponents/CustomButton';
import { moviesSelector } from '@/user/store/selectors/movies';
import { useStyle } from './styles';

export const Sidebar: FunctionComponent = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();
  const { selectParam, searchQuery, filters, currentPage, moviePerPage } =
    useSelector(moviesSelector);

  const onFilter = useCallback((): void => {
    dispatch(
      getMoviesListWithQuery({
        selectParam,
        searchQuery,
        filters,
        currentPage,
        moviePerPage,
      }),
    );
  }, [filters]);

  const clearFilter = (): void => {
    dispatch(clearMovieState());
    history.push('/');
  };

  return (
    <Drawer variant="permanent" classes={{ paper: classes.container }}>
      <Toolbar />
      <List>
        {sidebarFilterNamesFields.map(({ name, options }) => (
          <CustomAccordion key={name} filterParam={name} filterOptions={options} />
        ))}
      </List>
      <CustomButton name="filter" buttonType="button" onClick={onFilter} />
      {Object.values(filters).join().length > 2 ? (
        <CustomButton name="clear filter" buttonType="button" onClick={clearFilter} />
      ) : null}
    </Drawer>
  );
};
