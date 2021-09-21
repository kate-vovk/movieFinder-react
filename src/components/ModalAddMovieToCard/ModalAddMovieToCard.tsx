import { FunctionComponent, useState, ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import EuroIcon from '@material-ui/icons/Euro';
import { addMovieToCart } from '@/store/slices/cartSlice';
import { userSelector } from '@/selectors/auth';
import { EQuality } from '@/constants/constantsModal';
import { useStyles } from './styles';
import { RadioGroupForm } from './RadioGroupForm';
import { SelectForm } from './SelectForm';
import { convertQualityToNumber } from '@/utils/convertQualityToNumber';
import { getPriceMovie } from '@/utils/calculations/calcCostMovie';

interface IModalFormProps {
  movieId: string;
  price: number;
  closeModal: () => void;
}

export const ModalAddMovieToCard: FunctionComponent<IModalFormProps> = ({
  movieId,
  price,
  closeModal,
}) => {
  const { t } = useTranslation(['ModalAddMovieToCart']);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { userId } = useSelector(userSelector);
  const [movieQuality, setMovieQuality] = useState<string>(EQuality.HD);
  const [moviePurchasePeriod, setMoviePurchasePeriod] = useState(0);

  const onHandleMovieQuality = (event: ChangeEvent<HTMLInputElement>): void => {
    setMovieQuality(event.target.value);
  };

  const onHandleMoviePurchasePeriod = (
    event: ChangeEvent<{ name?: string; value: unknown }>,
  ): void => {
    setMoviePurchasePeriod(event.target.value as number);
  };

  const onHandleAddMovieDataToCart = (): void => {
    dispatch(
      addMovieToCart({
        userId,
        movieId,
        period: moviePurchasePeriod,
        quality: convertQualityToNumber(movieQuality),
      }),
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
          <div className={classes.modalFormFooter}>
            <div className={classes.priceContainer}>
              <span>{getPriceMovie(price, movieQuality, moviePurchasePeriod).toFixed(2)}</span>
              <EuroIcon fontSize="inherit" />
            </div>
            <Button color="primary" variant="contained" type="submit">
              {t('submit')}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
