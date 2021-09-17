import { FunctionComponent, useState, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';
import { addMovieToCart } from '@/store/slices/cartSlice';
import { userSelector } from '@/selectors/auth';
import { EQuality } from '@/constants/constantsModal';
// import { useStyles } from './styles';
import { RadioGroupForm } from './RadioGroupForm';
import { SelectForm } from './SelectForm';

interface IModalFormProps {
  movieId: string;
  closeModal: () => void;
}

export const ModalAddMovieToCard: FunctionComponent<IModalFormProps> = ({
  movieId,
  closeModal,
}) => {
  // const classes = useStyles();
  const dispatch = useDispatch();
  const userId = useSelector(userSelector);
  const [movieQuality, setMovieQuality] = useState<number>(1);
  const [moviePurchasePeriod, setMoviePurchasePeriod] = useState(0);

  const onHandleMovieQuality = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value === EQuality.HD) {
      setMovieQuality(1);
    }
    if (event.target.value === EQuality.SD) {
      setMovieQuality(2);
    }
  };

  const onHandleMoviePurchasePeriod = (
    event: ChangeEvent<{ name?: string; value: unknown }>,
  ): void => {
    setMoviePurchasePeriod(event.target.value as number);
  };

  const onHandleAddMovieDataToCart = (): void => {
    dispatch(
      addMovieToCart({ userId, movieId, period: moviePurchasePeriod, quality: movieQuality }),
    );
    closeModal();
  };

  return (
    <Formik
      initialValues={{
        quality: EQuality.HD,
        period: 0,
      }}
      onSubmit={onHandleAddMovieDataToCart}
    >
      {() => (
        <Form>
          <RadioGroupForm onChange={onHandleMovieQuality} value={movieQuality} />
          <SelectForm onChange={onHandleMoviePurchasePeriod} value={moviePurchasePeriod} />
          {/* <div className={classes.modalFormFooter}> */}
          {/* <div>
              <span>{getPriceMovie(price, movieQuality, moviePurchasePeriod)}</span>
            </div> */}
          <Button color="primary" variant="contained" type="submit">
            Submit
          </Button>
          {/* </div> */}
        </Form>
      )}
    </Formik>
  );
};
