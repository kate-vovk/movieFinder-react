import { FunctionComponent, useState, useEffect, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';
import { addMovieToCart } from '@/store/slices/cartSlice';
import { cartSelector } from '@/selectors/cart';
import { userSelector } from '@/selectors/auth';
import { calcCostMovie } from '@/utils/calculations/calcCostMovie';
import { Quality } from '@/utils/interfaces/cartInterfaces';
import { useStyles } from './styles';
import { ModalFormRadioGroup } from './ModalFormRadioGroup';
import { ModalFormSelect } from './ModalFormSelect';

interface IModalFormProps {
  movieId?: string;
  price?: number;
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
  const [priceMovie, setPriceMovie] = useState(0);
  const [valueQualityInput, setValueQualityInput] = useState(`${Quality.HD}`);
  const [valuePeriodInput, setValuePeriodInput] = useState(0);

  const getValueQualityInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setValueQualityInput((event.target as HTMLInputElement).value);
  };

  const getValuePeriodInput = (event: ChangeEvent<{ name?: string; value: unknown }>): void => {
    setValuePeriodInput(event.target.value as number);
  };

  const getFormValueInCart = (values: IStateValuesForm): void => {
    if (movieId && price) {
      const movie = {
        ...values,
        movieId,
        period: valuePeriodInput,
        quality: valueQualityInput,
        price: priceMovie,
      };
      dispatch(addMovieToCart({ userId, id, movies: [...movies, movie] }));
    }
    closeModal();
  };

  useEffect(() => {
    if (valueQualityInput === Quality.HD && price) {
      setPriceMovie(calcCostMovie(price, valuePeriodInput));
    } else if (valueQualityInput === Quality.SD && price) {
      setPriceMovie(calcCostMovie(price, valuePeriodInput, 0.9));
    }
  }, [valueQualityInput, valuePeriodInput]);

  return (
    <Formik
      initialValues={{
        quality: Quality.HD,
        period: 0,
      }}
      onSubmit={getFormValueInCart}
    >
      {() => (
        <Form>
          <ModalFormRadioGroup onChange={getValueQualityInput} value={valueQualityInput} />
          <ModalFormSelect onChange={getValuePeriodInput} value={valuePeriodInput} />
          <div className={classes.modalFormFooter}>
            <div>
              <span>{priceMovie}</span> $
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
