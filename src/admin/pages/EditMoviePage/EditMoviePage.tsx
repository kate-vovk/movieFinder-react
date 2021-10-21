import { useFormik } from 'formik';
import { FunctionComponent, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button, MenuItem, TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import countries from 'i18n-iso-countries';
import InputMask from 'react-input-mask';
import { editMovieData, getMoviePageData } from '@/admin/businessLogic/movie';
import { IMovie } from '@/interfaces/movieInterface';
import { useStyles } from './styles';
import { InputBlock } from '@/sharedComponents/InputBlock';
import { CLIENT_PATHS, movieAllFields } from '@/admin/constants';
import { Circular } from '@/sharedComponents/Circular';
import { TableErrors } from '@/admin/components/shared';
import { IFieldsValue, IGetParamsData, DataStatus } from '@/admin/interfaces';
import { SelectBlock } from '@/sharedComponents/SelectBlock';
import { editPageFormValidation } from '@/utils/validations/editPageForm';

interface IParamsIdMovie {
  id: string;
}

countries.registerLocale(require('i18n-iso-countries/langs/en.json'));

export const EditMoviePage: FunctionComponent = () => {
  const { id } = useParams<IParamsIdMovie>();
  const { t } = useTranslation(['AdminPanel']);
  const classes = useStyles();
  const history = useHistory();

  const [dataStatus, setDataStatus] = useState(DataStatus.initial);
  const [errorMessage, setErrorMessage] = useState('');

  const [productCompanies, setProductCompanies] = useState<IGetParamsData[]>([]);
  const [categories, setCategories] = useState<IGetParamsData[]>([]);
  const [genres, setGenres] = useState<IGetParamsData[]>([]);
  const [movie, setMovie] = useState<IMovie | null>(null);

  const initialCategory = categories.find((item) => movie?.category === item.name);
  const initialGenre = genres.find((item) => movie?.genre === item.name);
  const initialProductionCompany = productCompanies.find(
    (item) => movie?.productionCompany === item.name,
  );

  const countryObj = countries.getNames('en', { select: 'official' });
  const initialCounty = Object.entries(countryObj).find((item) => movie?.country === item[1]);

  useEffect(() => {
    setDataStatus(DataStatus.loading);
    getMoviePageData(id)
      .then((result) => {
        setMovie(result.dataForEditPage);
        setProductCompanies(result.productionCompanies);
        setCategories(result.categories);
        setGenres(result.genres);
        setDataStatus(DataStatus.success);
      })
      .catch((error: { message: string }) => {
        setErrorMessage(error.message);
        setDataStatus(DataStatus.error);
      });
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: movie?.id || '',
      title: movie?.title || '',
      description: movie?.description || '',
      coverUrl: movie?.coverUrl || '',
      cast: movie?.cast || '',
      category: initialCategory?.id || '',
      country: initialCounty?.[1] || '',
      duration: `${movie?.duration} minutes` || '',
      genre: initialGenre?.id || '',
      price: `${movie?.price} USD` || '',
      producer: movie?.producer || '',
      productionCompany: initialProductionCompany?.id || '',
      releaseDate: movie?.releaseDate || '0000-00-00',
      trailerUrl: movie?.trailerUrl || '',
    },
    validationSchema: editPageFormValidation,
    onSubmit: (values) => {
      editMovieData(values)
        .then(() => {
          history.push(CLIENT_PATHS.admin);
        })
        .catch((error: { message: string }) => {
          setErrorMessage(error.message);
          setDataStatus(DataStatus.error);
        });
    },
  });

  const renderData = (): JSX.Element => {
    if (dataStatus === DataStatus.loading) {
      return (
        <div>
          <h1 className={classes.titleAdmin}>{t('adminPanel')}</h1>
          <div className={classes.block}>
            <Circular />
          </div>
        </div>
      );
    }
    if (dataStatus === DataStatus.error) {
      return (
        <div>
          <h1 className={classes.titleAdmin}>{t('adminPanel')}</h1>
          <div className={classes.block}>
            <TableErrors errorMessage={errorMessage} />
          </div>
        </div>
      );
    }

    return (
      <div className={classes.root}>
        <h1 className={classes.title}>{t('adminPanel')}</h1>
        <h2>{t('editMovie')}</h2>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          {movieAllFields.map((item: IFieldsValue) => {
            if (item === 'country') {
              const countryArr = Object.entries(countryObj).map(([key, value]) => {
                return {
                  label: value,
                  value: key,
                };
              });
              return (
                <SelectBlock
                  className={classes.select}
                  name={item}
                  formControlClass={classes.formControl}
                  inputLabelName={item}
                  value={formik.values[item]}
                  onChange={formik.handleChange}
                  id={item}
                  key={item}
                  option={countryArr.map(({ label, value }) => (
                    <MenuItem key={value} value={label}>
                      {label}
                    </MenuItem>
                  ))}
                />
              );
            }
            if (item === 'category' || item === 'genre' || item === 'productionCompany') {
              let data: IGetParamsData[] = [];
              if (item === IFieldsValue.category) {
                data = categories;
              }
              if (item === IFieldsValue.genre) {
                data = genres;
              }
              if (item === IFieldsValue.productionCompany) {
                data = productCompanies;
              }

              return (
                <SelectBlock
                  className={classes.select}
                  name={item}
                  formControlClass={classes.formControl}
                  inputLabelName={item}
                  value={formik.values[item]}
                  onChange={formik.handleChange}
                  id={item}
                  key={item}
                  option={data.map((result) => {
                    return (
                      <MenuItem key={result.id} value={result.id}>
                        {result.name}
                      </MenuItem>
                    );
                  })}
                />
              );
            }
            if (item === 'releaseDate') {
              return (
                <InputBlock
                  className={classes.select}
                  formControlClass={classes.formControl}
                  labelName={item}
                  type="date"
                  value={formik.values[item]}
                  onChange={formik.handleChange}
                  id={item}
                  key={item}
                  error={formik.touched[item] && Boolean(formik.errors[item])}
                />
              );
            }
            if (item === 'price') {
              return (
                <InputMask
                  mask="99,99 USD"
                  maskPlaceholder="."
                  value={formik.values[item]}
                  onChange={formik.handleChange}
                  key={item}
                >
                  <TextField
                    label={item}
                    placeholder={item}
                    className={classes.select}
                    id={item}
                    key={item}
                    error={formik.touched[item] && Boolean(formik.errors[item])}
                    helperText={formik.touched[item] && formik.errors[item]}
                    inputProps={{ min: 0 }}
                  />
                </InputMask>
              );
            }
            if (item === 'duration') {
              return (
                <InputMask
                  mask="999 minutes"
                  maskPlaceholder="."
                  value={formik.values[item]}
                  onChange={formik.handleChange}
                  key={item}
                >
                  <TextField
                    label={item}
                    className={classes.select}
                    id={item}
                    key={item}
                    error={formik.touched[item] && Boolean(formik.errors[item])}
                    helperText={formik.touched[item] && formik.errors[item]}
                    inputProps={{ min: 0 }}
                  />
                </InputMask>
              );
            }
            return (
              <InputBlock
                className={classes.input}
                formControlClass={classes.formControl}
                labelName={item}
                type={item}
                value={formik.values[item]}
                onChange={formik.handleChange}
                id={item}
                key={item}
                error={formik.touched[item] && Boolean(formik.errors[item])}
                helperText={formik.touched[item] && formik.errors[item]}
              />
            );
          })}
          <Button color="primary" variant="contained" type="submit" className={classes.btnSubmit}>
            {t('apply')}
          </Button>
        </form>
      </div>
    );
  };
  return renderData();
};
