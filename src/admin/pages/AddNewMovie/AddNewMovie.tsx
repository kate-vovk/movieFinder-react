import { useFormik } from 'formik';
import { FunctionComponent, useEffect, useState } from 'react';
import { Button, MenuItem, TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import countries from 'i18n-iso-countries';
import InputMask from 'react-input-mask';
import { useStyles } from './styles';
import { CLIENT_PATHS, movieAllFields } from '@/admin/constants';
import { Circular } from '@/sharedComponents/Circular';
import { TableErrors } from '@/admin/components/shared/TableErrors';
import { InputBlock } from '@/sharedComponents/InputBlock';
import { addMovieData, getAllParamsList } from '@/admin/businessLogic/movie';
import { DataStatus, IFieldsValue, IGetParamsData } from '@/admin/interfaces';
import { SelectBlock } from '@/sharedComponents/SelectBlock';
import { editPageFormValidation } from '@/utils/validations/editPageForm';

countries.registerLocale(require('i18n-iso-countries/langs/en.json'));

export const AddNewMovie: FunctionComponent = () => {
  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation(['AdminPanel']);
  const [errorMessage, setErrorMessage] = useState('');
  const [dataStatus, setDataStatus] = useState(DataStatus.initial);

  const [productCompanies, setProductCompanies] = useState<IGetParamsData[]>([]);
  const [categories, setCategories] = useState<IGetParamsData[]>([]);
  const [genres, setGenres] = useState<IGetParamsData[]>([]);

  const countryObj = countries.getNames('en', { select: 'official' });
  const dateNow = new Date().toISOString().split('T')[0];

  useEffect(() => {
    setDataStatus(DataStatus.loading);
    getAllParamsList()
      .then((data) => {
        setDataStatus(data.stateStatus);
        setProductCompanies(data.productionCompanies);
        setCategories(data.categories);
        setGenres(data.genres);
      })
      .catch((error: { message: string }) => {
        setErrorMessage(error.message);
        setDataStatus(DataStatus.error);
      });
  }, []);

  const formik = useFormik({
    initialValues: {
      id: '',
      title: '',
      description: '',
      coverUrl: '',
      cast: '',
      category: '',
      country: '',
      duration: 'minutes',
      genre: '',
      price: 'USD',
      producer: '',
      productionCompany: '',
      releaseDate: dateNow,
      trailerUrl: '',
    },
    validationSchema: editPageFormValidation,
    onSubmit: (values) => {
      addMovieData(values)
        .then(() => {
          history.push(CLIENT_PATHS.adminMovies);
        })
        .catch((error: { message: string }) => {
          setErrorMessage(error.message);
          setDataStatus(DataStatus.error);
        });
    },
  });

  const renderData = (): JSX.Element => {
    if (dataStatus === DataStatus.loading) {
      return <Circular />;
    }
    if (dataStatus === DataStatus.error) {
      return <TableErrors errorMessage={errorMessage} />;
    }

    return (
      <div className={classes.root}>
        <h2>{t('addMovie')}</h2>
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
                  inputProps={{ max: '9999-12-31' }}
                />
              );
            }
            if (item === 'price') {
              return (
                <InputMask
                  mask="99.99 USD"
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
