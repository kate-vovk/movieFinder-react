import { FunctionComponent } from 'react';
import { Drawer, List, Toolbar } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { sidebarFilterNamesFields } from '@/user/constants/sidebarFilterNamesFields';
import { useStyle } from './styles';
import { CustomAccordion } from './CustomAccordion';
import { getMoviesListWithQuery } from '@/user/store/slices/moviesSlice';
import { CustomButton } from '@/user/components/CustomButton';
import { moviesSelector } from '@/user/store/selectors/movies';

export const Sidebar: FunctionComponent = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const { selectParam, searchQuery, filters } = useSelector(moviesSelector);

  const filterMovies = (): void => {
    dispatch(
      getMoviesListWithQuery({
        selectParam,
        searchQuery,
        filters,
      }),
    );
  };
  return (
    <Drawer variant="permanent" classes={{ paper: classes.container }}>
      <Toolbar />
      <List>
        {sidebarFilterNamesFields.map(({ name, options }) => (
          <CustomAccordion key={name} filterParam={name} filterOptions={options} />
        ))}
      </List>
      <CustomButton name="filter" buttonType="button" onClick={filterMovies} />
    </Drawer>
  );
};