import { FunctionComponent, useState } from 'react';
import { ListItem, ListItemIcon, Typography, Paper, Popover } from '@material-ui/core';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useStyle } from './styles';
import { convertIdToQuality } from '@/utils/convertQualityToNumber';
import { CLIENT_PATHS } from '@/user/constants';
import {
  getDaysHoursMinutesFromExpirationDate,
  getTimeLeftToExpiration,
} from '@/utils/getDaysHoursMinutesFromExpirationDate';

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
  const [time, setTime] = useState<string>(
    getTimeLeftToExpiration(getDaysHoursMinutesFromExpirationDate(expirationDate)),
  );
  const [selectedDate, handleDateChange] = useState<Date | null>(new Date(expirationDate));
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event: { currentTarget: any }): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popoverId = open ? 'simple-popover' : undefined;

  const updateTimeLeftToExpiration = (): string => {
    setInterval(
      () => setTime(getTimeLeftToExpiration(getDaysHoursMinutesFromExpirationDate(expirationDate))),
      1000,
    );
    return time;
  };
  const goToMoviePage = (): void => {
    history.push(`${CLIENT_PATHS.movies}/${movieId}`);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ListItem className={classes.itemContainer} component={Paper}>
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
            {t('Available')}: {period === 0 ? t('forever') : updateTimeLeftToExpiration()}
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
            <DateTimePicker
              InputProps={{ readOnly: true }}
              minDate={new Date(expirationDate)}
              maxDate={new Date(expirationDate)}
              variant="inline"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </Popover>
        </div>
      </ListItem>
    </MuiPickersUtilsProvider>
  );
};
