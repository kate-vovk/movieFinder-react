import React, { ChangeEvent, FunctionComponent, MouseEvent } from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesListWithQuery } from '@/user/store/slices/moviesSlice';
import { moviesSelector } from '@/user/store/selectors/movies';
import { RowsPerPageOptions } from '@/interfaces/paginationData';
import { useStyle } from './styles';

export const Pagination: FunctionComponent = () => {
  const classes = useStyle();
  const dispatch = useDispatch();

  const { selectParam, searchQuery, filters, totalCount, currentPage, moviePerPage } =
    useSelector(moviesSelector);

  const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number): void => {
    dispatch(
      getMoviesListWithQuery({
        selectParam,
        searchQuery,
        filters,
        currentPage: newPage,
        moviePerPage,
      }),
    );
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    dispatch(
      getMoviesListWithQuery({
        selectParam,
        searchQuery,
        filters,
        currentPage: 0,
        moviePerPage: Number(event.target.value),
      }),
    );
  };

  return (
    <TablePagination
      component="div"
      count={totalCount}
      page={currentPage}
      onPageChange={handleChangePage}
      rowsPerPage={moviePerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      rowsPerPageOptions={RowsPerPageOptions}
      className={classes.pagination}
    />
  );
};
