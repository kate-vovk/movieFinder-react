import { FunctionComponent, useState, useEffect, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';
import { addMovieToCart } from '@/store/slices/cartSlice';
import { cartSelector } from '@/selectors/cart';
import { calcCostMovie } from '@/utils/calculations/calcCostMovie';
import { Quality } from '@/utils/interfaces/cartInterfaces';
import { useStyles } from './styles';
import { ModalFormRadioGroup } from './ModalFormRadioGroup';
import { ModalFormSelect } from './ModalFormSelect';

interface IModalFormProps {
  movieId: string;
  price: number;
  closeModal: () => void;
}

interface IStateValuesForm {
  quality: string;
  period: number;
}

export const ModalForm: FunctionComponent<IModalFormProps> = ({ movieId, price, closeModal }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { userId, movies, id } = useSelector(cartSelector);
  const [priceMovie, setPriceMovie] = useState(price);
  const [valueQualityInput, setValueQualityInput] = useState('hd');
  const [valuePeriodInput, setValuePeriodInput] = useState(0);

  const qualities: string[] = [Quality[0], Quality[1]];

  const getValueQualityInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setValueQualityInput((event.target as HTMLInputElement).value);
  };

  const getValuePeriodInput = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>,
  ): void => {
    setValuePeriodInput(event.target.value as number);
  };

  const getFormValueInCart = (values: IStateValuesForm): void => {
    const movie = {
      ...values,
      movieId,
      period: valuePeriodInput,
      quality: valueQualityInput,
      price: priceMovie,
    };
    dispatch(addMovieToCart({ userId, id, movies: [...movies, movie] }));
    closeModal();
  };

  useEffect(() => {
    if (valueQualityInput === qualities[0]) {
      setPriceMovie(calcCostMovie(price, valuePeriodInput));
    } else if (valueQualityInput === qualities[1]) {
      setPriceMovie(calcCostMovie(price, valuePeriodInput, 0.9));
    }
  }, [valueQualityInput, valuePeriodInput]);

  return (
    <Formik
      initialValues={{
        quality: qualities[0],
        period: 0,
      }}
      onSubmit={getFormValueInCart}
    >
      {() => (
        <Form>
          <ModalFormRadioGroup onChange={getValueQualityInput} value={valueQualityInput} />
          <ModalFormSelect onChange={getValuePeriodInput} value={valuePeriodInput} />
          <div className={classes.modalFormFooter}>
            <div className={classes.modalFormPrice}>
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
