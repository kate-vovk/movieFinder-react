import { FunctionComponent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { useTranslation } from 'react-i18next';
import { CustomButton } from '@/user/components';
import { showModal } from '@/user/store/slices/modalSlice';
import { cartSelector } from '@/user/store/selectors/cart';
import { favoritesSelector, isFavoritesLoadingSelector } from '@/user/store/selectors/favorites';
import { userIdSelector } from '@/user/store/selectors/auth';
import { IMovie } from '@/interfaces/movieInterface';
import { TMovieFavorites } from '@/interfaces/favoritesInterface';
import { removeMovieFromCart } from '@/user/store/slices/cartSlice';
import { addMovieToFavorites, removeMovieFromFavorites } from '@/user/store/slices/favoritesSlice';
import { modalTypes } from '@/user/constants/modalTypes';
import { activeOrdersSelector } from '@/user/store/selectors/orders';
import { useStyle, cartButtonTheme } from './styles';

interface IMovieControlProps {
  movieId: string;
  price: number;
}

export const MovieControl: FunctionComponent<IMovieControlProps> = ({ movieId, price }) => {
  const { t } = useTranslation(['MovieControl']);
  const dispatch = useDispatch();
  const activeOrders = useSelector(activeOrdersSelector);
  const { movies, isLoading } = useSelector(cartSelector);
  const favoritesMovies = useSelector(favoritesSelector);
  const isFavoritesLoading = useSelector(isFavoritesLoadingSelector);
  const userId = useSelector(userIdSelector);
  const modalType = modalTypes.modalMovieCart;
  const modalProps = { movieId, price };

  const [openTooltip, setOpen] = useState(false);

  const handleOpen = (): void => {
    if (activeOrders.find(({ id }: { id: string }) => id === movieId)) {
      setOpen(true);
    }
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const addMovieIdToCart = (): void => {
    if (movies.find((movie: IMovie) => movie.id === movieId)) {
      dispatch(removeMovieFromCart({ userId, movieId }));
    } else if (!activeOrders.find(({ id }: { id: string }) => id === movieId)) {
      dispatch(showModal({ modalType, modalProps }));
    }
  };

  const toggleFavorites = (): void => {
    if (favoritesMovies.find((movie: TMovieFavorites) => movie.id === movieId)) {
      dispatch(removeMovieFromFavorites({ userId, movieId }));
    } else {
      dispatch(addMovieToFavorites({ userId, movieId }));
    }
  };

  const classes = useStyle({
    isIncluded: Boolean(movies.find((movie: IMovie) => movie.id === movieId)),
    isDisabled: Boolean(activeOrders.find(({ id }: { id: string }) => id === movieId)),
  });

  const classesFavorites = useStyle({
    isIncluded: Boolean(favoritesMovies.find((movie: TMovieFavorites) => movie.id === movieId)),
    isDisabled: Boolean(),
  });

  return (
    <div className={classes.footer}>
      <CustomButton
        name="favorite"
        buttonType="button"
        className={classesFavorites.addToFavoriteButton}
        onClick={toggleFavorites}
        disabled={isFavoritesLoading}
      />
      <ThemeProvider theme={cartButtonTheme}>
        <Tooltip
          open={openTooltip}
          onClose={handleClose}
          onOpen={handleOpen}
          title={String(t('tooltipText'))}
        >
          <div>
            <CustomButton
              name="cart"
              buttonType="button"
              onClick={addMovieIdToCart}
              className={classes.addToCartButton}
              disabled={isLoading || openTooltip}
            />
          </div>
        </Tooltip>
      </ThemeProvider>
      <Typography className={classes.price} color="textSecondary" gutterBottom>
        {price} $
      </Typography>
    </div>
  );
};
