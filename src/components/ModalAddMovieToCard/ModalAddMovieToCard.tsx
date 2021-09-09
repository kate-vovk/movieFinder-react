import { FunctionComponent, useState, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';
import { addMovieToCart } from '@/store/slices/cartSlice';
import { cartSelector } from '@/selectors/cart';
import { userSelector } from '@/selectors/auth';
import { calcCostMovie } from '@/utils/calculations/calcCostMovie';
import { Quality } from '@/utils/interfaces/cartInterfaces';
import { useStyles } from './styles';
import { RadioGroupForm } from './RadioGroupForm';
import { SelectForm } from './SelectForm';

interface IModalFormProps {
  movieId: string;
  price: number;
  closeModal: () => void;
}

interface IStateValuesForm {
  quality: string;
  period: number;
}

export const ModalAddMovieToCard: FunctionComponent<IModalFormProps> = ({
  movieId,
  price,
  closeModal,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { movies, id } = useSelector(cartSelector);
  const userId = useSelector(userSelector);
  const [movieQuality, setMovieQuality] = useState(`${Quality.HD}`);
  const [moviePurchasePeriod, setMoviePurchasePeriod] = useState(0);

  const onHandleMovieQuality = (event: ChangeEvent<HTMLInputElement>): void => {
    setMovieQuality((event.target as HTMLInputElement).value);
  };

  const onHandleMoviePurchasePeriod = (
    event: ChangeEvent<{ name?: string; value: unknown }>,
  ): void => {
    setMoviePurchasePeriod(event.target.value as number);
  };

  const getPriceMovie = (): number => {
    if (movieQuality === Quality.HD) {
      return calcCostMovie(price, moviePurchasePeriod);
    }
    if (movieQuality === Quality.SD) {
      return calcCostMovie(price, moviePurchasePeriod, 0.9);
    }
    return price;
  };

  const onHandleDataForCart = (values: IStateValuesForm): void => {
    const movie = {
      ...values,
      movieId,
      period: moviePurchasePeriod,
      quality: movieQuality,
      price: getPriceMovie(),
    };
    dispatch(addMovieToCart({ userId, id, movies: [...movies, movie] }));

    closeModal();
  };

  return (
    <Formik
      initialValues={{
        quality: Quality.HD,
        period: 0,
      }}
      onSubmit={onHandleDataForCart}
    >
      {() => (
        <Form>
          <RadioGroupForm onChange={onHandleMovieQuality} value={movieQuality} />
          <SelectForm onChange={onHandleMoviePurchasePeriod} value={moviePurchasePeriod} />
          <div className={classes.modalFormFooter}>
            <div>
              <span>{getPriceMovie()}</span> $
            </div>
            <Button color="primary" variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
