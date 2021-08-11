import React from 'react';
import { Button, IconButton, Paper } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';

import { useHistory } from 'react-router-dom';
import { useStyle } from './styles';

export const Footer: React.FunctionComponent = () => {
  const classes = useStyle();
  const history = useHistory();
  return (
    <footer className={classes.footer}>
      <Paper className={classes.paper}>
        <div>
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
          <IconButton onClick={() => history.push('/')}>
            <MovieFilterIcon />
          </IconButton>
        </span>
        <span>
          <Button onClick={() => window.open('https://www.themoviedb.org/', '_blank')}>
            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" />
          </Button>
        </span>
      </Paper>
    </footer>
  );
};
