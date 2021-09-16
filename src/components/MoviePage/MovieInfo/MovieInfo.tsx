import { FunctionComponent, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useStyle } from './styles';

interface IMovieInfoProps {
  director: string;
  duration: number;
  title: string;
  year: string;
  company: string;
  country: string;
  actorsList: string;
  genresList: string;
  categoriesList: string;
}

export const MovieInfo: FunctionComponent<IMovieInfoProps> = ({
  director,
  duration,
  title,
  year,
  actorsList,
  genresList,
  categoriesList,
  company,
  country,
}) => {
  const { t } = useTranslation(['MoviePage']);
  const classes = useStyle();

  const movieInfo = [
    { id: 1, name: 'country', value: country },
    { id: 2, name: 'duration', value: duration ? `${duration} ${t('min')}` : undefined },
    { id: 3, name: 'releaseDate', value: String(new Date(year).getFullYear()) },
    { id: 4, name: 'productionCompanies', value: company },
    { id: 5, name: 'genres', value: genresList },
    { id: 6, name: 'categories', value: categoriesList },
    { id: 7, name: 'director', value: director },
    { id: 8, name: 'actors', value: actorsList },
  ];

  const resultMovieInfo = useMemo(
    () => movieInfo.filter((item) => item.value && item.value.indexOf('undefined')),
    [movieInfo],
  );

  return (
    <div className={classes.columnRight}>
      <h1 className={classes.infoMovieTitle}>{title}</h1>
      <ul className={classes.infoMovieList}>
        {resultMovieInfo.map((item) => {
          return (
            <li key={item.id} className={classes.infoMovieListElement}>
              {`${t(item.name)}: ${item.value}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
