import { FunctionComponent, useState, useEffect, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';
import { addMovieToCart } from '@/store/slices/cartSlice';
import { cartSelector } from '@/selectors/cart';
import { useStyles } from './styles';
import { ModalFormRadioGroup } from './ModalFormRadioGroup';
import { ModalFormSelect } from './ModalFormSelect';

interface IProps {
  movieId: string;
  price: number;
  closeModal: () => void;
}

export const ModalForm: FunctionComponent<IProps> = ({ movieId, price, closeModal }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { userId, movies, id } = useSelector(cartSelector);
  const [priceMovie, setPriceMovie] = useState(price);
  const [valueRadio, setValueRadio] = useState('hd');
  const [valueSelect, setValueSelect] = useState(0);

  const addValueRadio = (event: ChangeEvent<HTMLInputElement>): void => {
    setValueRadio((event.target as HTMLInputElement).value);
  };

  const addValueSelect = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>,
  ): void => {
    setValueSelect(event.target.value as number);
  };

  useEffect(() => {
    if (valueRadio === 'hd') {
      if (valueSelect === 7) {
        setPriceMovie(price * 0.2);
      } else if (valueSelect === 30) {
        setPriceMovie(price * 0.5);
      } else {
        setPriceMovie(price);
      }
    } else if (valueRadio === 'sd') {
      if (valueSelect === 7) {
        setPriceMovie(price * 0.9 * 0.2);
      } else if (valueSelect === 30) {
        setPriceMovie(price * 0.9 * 0.5);
      } else {
        setPriceMovie(price * 0.9);
      }
    }
  }, [valueRadio, valueSelect]);

  return (
    <Formik
      initialValues={{
        quality: 'hd',
        period: 0,
      }}
      onSubmit={(values) => {
        const movie = {
          movieId,
          period: valueSelect,
          quality: valueRadio,
          price: priceMovie,
        };
        dispatch(addMovieToCart({ userId, id, movies: [...movies, movie] }));
        closeModal();
      }}
    >
      {() => (
        <Form>
          <ModalFormRadioGroup onChange={addValueRadio} value={valueRadio} />
          <ModalFormSelect onChange={addValueSelect} value={valueSelect} />
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
