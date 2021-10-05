import { MouseEvent, FunctionComponent, useState } from 'react';
import { ListItem, ListItemIcon, Typography, Paper, Popover } from '@material-ui/core';
import { useDebounce } from 'use-debounce';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useStyle } from './styles';
import { convertIdToQuality } from '@/utils/convertQualityToNumber';
import { CLIENT_PATHS } from '@/user/constants';

interface IMyMovie {
  movieId: string;
  coverUrl: string;
  title: string;
  quality: number;
  duration: number;
  expirationDate: string;
  period: number;
}

export const MyMovieItem: FunctionComponent<IMyMovie> = ({
  coverUrl,
  title,
  quality,
  duration,
  expirationDate,
  period,
  movieId,
}) => {
  const { t } = useTranslation(['UserPage']);
  const classes = useStyle();
  const history = useHistory();
  const [selectedDate, handleDateChange] = useState<Date | null>(new Date(expirationDate));
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event: MouseEvent<any>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popoverId = open ? 'simple-popover' : undefined;

  const [debouncedTime] = useDebounce(expirationDate, 1000 * 60 * 60);

  const getDaysHours = (expiration: string): string => {
    const dateFuture = new Date(expiration);
    const dateNow = new Date();

    let minutes = Math.floor((dateFuture.getTime() - dateNow.getTime()) / (1000 * 60));
    let hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    hours -= days * 24;
    minutes -= days * 24 * 60 - hours * 60;

    return days <= 0
      ? `${hours}${t('hours')} ${minutes}${t('minutes')}`
      : `${days}${t('days')} ${hours}${t('hours')}`;
  };

  const goToMoviePage = (): void => {
    history.push(`${CLIENT_PATHS.movies}/${movieId}`);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ListItem className={classes.container} component={Paper}>
        <ListItemIcon className={classes.image}>
          <img src={coverUrl} />
        </ListItemIcon>
        <div className={classes.contentContainer}>
          <Typography onClick={goToMoviePage} className={classes.movieTitle}>
            {title}
          </Typography>
          <Typography className={`${classes.hidden} ${classes.movieQuality}`}>
            {convertIdToQuality(quality)}
          </Typography>
          <Typography className={`${classes.hidden} ${classes.movieDuration}`}>
            {duration}
            {t('minutes')}
          </Typography>
          <Typography
            className={classes.movieExpiration}
            aria-describedby={popoverId}
            onClick={handleClick}
          >
            {t('Available')}: {period === 0 ? t('forever') : getDaysHours(debouncedTime)}
          </Typography>
          <Popover
            PaperProps={{
              style: { width: '190px', height: '40px' },
            }}
            id={popoverId}
            open={open && period !== 0}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <DateTimePicker variant="inline" value={selectedDate} onChange={handleDateChange} />
          </Popover>
        </div>
      </ListItem>
    </MuiPickersUtilsProvider>
  );
};