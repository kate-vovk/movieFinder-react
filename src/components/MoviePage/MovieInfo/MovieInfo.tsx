import { FunctionComponent } from 'react';
import { useStyle } from './styles';

interface IProps {
  director: string;
  duration: number;
  title: string;
  year: string;
  actorsList: string[];
  genresList: string[];
  categoriesList: string[];
}

export const MovieInfo: FunctionComponent<IProps> = ({
  director,
  duration,
  title,
  year,
  actorsList,
  genresList,
  categoriesList,
}) => {
  const classes = useStyle();

  const movieInfo = [
    { id: 1, name: 'country', value: 'USA' }, // Temporary solution. In the future, receiving data from the server will be implemented
    { id: 2, name: 'duration', value: `${duration} min` },
    { id: 3, name: 'release date (year)', value: year },
    { id: 4, name: 'production companies', value: 'Disney' }, // Temporary solution. In the future, receiving data from the server will be implemented
    { id: 5, name: 'genres', value: genresList.join(', ') },
    { id: 6, name: 'categories', value: categoriesList.join(', ') },
    { id: 7, name: 'director', value: director },
    { id: 8, name: 'actors', value: actorsList.join(', ') },
  ];

  return (
    <div className={classes.columnRight}>
      <h1 className={classes.infoMovieTitle}>{title}</h1>
      <ul className={classes.infoMovieList}>
        {movieInfo.map((item): JSX.Element | void => {
          if (item.value)
            return (
              <li key={item.id} className={classes.infoMovieListElement}>
                {`${item.name}: ${item.value}`}
              </li>
            );
          return <></>;
        })}
      </ul>
    </div>
  );
};
