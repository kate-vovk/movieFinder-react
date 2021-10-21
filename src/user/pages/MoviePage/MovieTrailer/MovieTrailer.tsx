import { FunctionComponent } from 'react';
import { useStyle } from './styles';

interface IMovieTrailerProps {
  trailerUrl?: string;
}

export const MovieTrailer: FunctionComponent<IMovieTrailerProps> = ({ trailerUrl }) => {
  const classes = useStyle();

  return (
    <div className={classes.trailerMovie}>
      <iframe
        width="560"
        height="315"
        src={trailerUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
