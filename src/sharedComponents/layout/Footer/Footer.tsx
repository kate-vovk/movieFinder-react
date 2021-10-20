import { FunctionComponent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IconButton, Paper } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import logo from '@/assets/icons/logo.svg';
import { clearMovieState } from '@/user/store/slices/moviesSlice';
import { useStyle } from './styles';

export const Footer: FunctionComponent = () => {
  const classes = useStyle();
  const history = useHistory();
  const dispatch = useDispatch();

  const goToMainPage = useCallback(() => {
    dispatch(clearMovieState());
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
            <img src={logo} className={classes.logo} alt="logo" />
          </IconButton>
        </span>
      </Paper>
    </footer>
  );
};
