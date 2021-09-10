import { FunctionComponent } from 'react';
import { useStyle } from './styles';

interface IMovieInfoProps {
  director: string;
  duration: number;
  title: string;
  year: string;
  actorsList: string[];
  genresList: string[];
  categoriesList: string[];
  studio: string;
}

export const MovieInfo: FunctionComponent<IMovieInfoProps> = ({
  director,
  duration,
  title,
  year,
  actorsList,
  genresList,
  categoriesList,
  studio,
}) => {
  const classes = useStyle();

  const movieInfo = [
    { id: 1, name: 'country', value: 'USA' }, // Temporary solution. In the future, receiving data from the server will be implemented
    { id: 2, name: 'duration', value: duration },
    { id: 3, name: 'release date (year)', value: year },
    { id: 4, name: 'production companies', value: studio },
    { id: 5, name: 'genres', value: genresList.join(', ') },
    { id: 6, name: 'categories', value: categoriesList.join(', ') },
    { id: 7, name: 'director', value: director },
    { id: 8, name: 'actors', value: actorsList.join(', ') },
  ];

  return (
    <div className={classes.columnRight}>
      <h1 className={classes.infoMovieTitle}>{title}</h1>
      <ul className={classes.infoMovieList}>
        {movieInfo.map((item) => {
          return (
            <li key={item.id} className={classes.infoMovieListElement}>
              {`${item.name}: ${item.value}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
};