import { FunctionComponent, useCallback } from 'react';
import { IconButton, Paper } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';

import { useHistory } from 'react-router-dom';
import { useStyle } from './styles';

export const Footer: FunctionComponent = () => {
  const classes = useStyle();
  const history = useHistory();
  const goToMainPage = useCallback(() => {
    history.push('/');
  }, []);
  return (
    <footer className={classes.footer}>
      <Paper className={classes.paper}>
        <div className={classes.left}>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <InstagramIcon />
          </IconButton>
          <IconButton>
            <TelegramIcon />
          </IconButton>
        </div>
        <span>
          <IconButton onClick={goToMainPage}>
            <MovieFilterIcon />
          </IconButton>
        </span>
      </Paper>
    </footer>
  );
};
