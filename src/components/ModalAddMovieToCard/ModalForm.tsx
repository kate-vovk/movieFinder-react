import { FunctionComponent, useState, useEffect, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';
import { addMovieToCart } from '@/store/slices/cartSlice';
import { cartSelector } from '@/selectors/cart';
import { useStyles } from './styles';
import { ModalFormRadioGroup } from './ModalFormRadioGroup';
import { ModalFormSelect } from './ModalFormSelect';

interface IComponentProps {
  movieId: string;
  price: number;
  closeModal: () => void;
}

interface IStateValuesForm {
  quality: string;
  period: number;
}

export const ModalForm: FunctionComponent<IComponentProps> = ({ movieId, price, closeModal }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { userId, movies, id } = useSelector(cartSelector);
  const [priceMovie, setPriceMovie] = useState(price);
  const [valueInputRadio, setValueInputRadio] = useState('hd');
  const [valueInputSelect, setValueInputSelect] = useState(0);

  const addValueInputRadio = (event: ChangeEvent<HTMLInputElement>): void => {
    setValueInputRadio((event.target as HTMLInputElement).value);
  };

  const addValueInputSelect = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>,
  ): void => {
    setValueInputSelect(event.target.value as number);
  };

  const calcCostMovieHd = (cost: number, valueInput: number): number => {
    let resultCost: number;
    switch (valueInput) {
      case 7:
        resultCost = cost * 0.2;
        break;
      case 30:
        resultCost = cost * 0.5;
        break;
      default:
        resultCost = cost;
    }
    return resultCost;
  };

  const calcCostMovieSd = (cost: number, valueInput: number): number => {
    let resultCost: number;
    switch (valueInput) {
      case 7:
        resultCost = cost * 0.9 * 0.2;
        break;
      case 30:
        resultCost = cost * 0.9 * 0.5;
        break;
      default:
        resultCost = cost * 0.9;
    }
    return resultCost;
  };

  const getFormValueInCart = (values: IStateValuesForm): void => {
    const movie = {
      ...values,
      movieId,
      period: valueInputSelect,
      quality: valueInputRadio,
      price: priceMovie,
    };
    dispatch(addMovieToCart({ userId, id, movies: [...movies, movie] }));
    closeModal();
  };

  useEffect(() => {
    if (valueInputRadio === 'hd') {
      setPriceMovie(calcCostMovieHd(price, valueInputSelect));
    } else if (valueInputRadio === 'sd') {
      setPriceMovie(calcCostMovieSd(price, valueInputSelect));
    }
  }, [valueInputRadio, valueInputSelect]);

  return (
    <Formik
      initialValues={{
        quality: 'hd',
        period: 0,
      }}
      onSubmit={getFormValueInCart}
    >
      {() => (
        <Form>
          <ModalFormRadioGroup onChange={addValueInputRadio} value={valueInputRadio} />
          <ModalFormSelect onChange={addValueInputSelect} value={valueInputSelect} />
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
