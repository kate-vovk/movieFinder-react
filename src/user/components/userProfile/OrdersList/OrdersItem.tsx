import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { CardContent, CardMedia } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import { IOrders } from '@/interfaces/orderInterface';
import { CLIENT_PATHS } from '@/user/constants';
import { useStyle } from './styles';

export const OrdersItem: FunctionComponent<{ orderData: IOrders }> = ({ orderData }) => {
  const { ordersId, ordersDataList } = orderData;
  const [orderFilm] = ordersDataList;
  const classes = useStyle();
  const { t } = useTranslation(['myOrders']);

  return (
    <Accordion classes={{ root: classes.root }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div className={classes.header}>
          <Typography>
            <b>{t('orderId')}</b>: {ordersId}
          </Typography>
          <Typography>
            <b>{t('orderDate')}</b>: {new Date(orderFilm.orderDate).toLocaleString()}
          </Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails classes={{ root: classes.details }}>
        {ordersDataList.map((orderDataList) => (
          <Link
            to={`${CLIENT_PATHS.movies}/${orderDataList.id}`}
            className={classes.link}
            key={orderDataList.id}
          >
            <div className={classes.imageBox}>
              <CardMedia className={classes.image} image={orderDataList.coverUrl} />
              <Typography className={classes.title}>
                {orderDataList.title} ({new Date(orderDataList.releaseDate).getFullYear()})
              </Typography>
            </div>
            <CardContent className={classes.description}>
              <Typography>
                <b>{t('filmPrice')}</b>: {orderDataList.filmPrice}$
              </Typography>
            </CardContent>
          </Link>
        ))}
      </AccordionDetails>
      <Typography className={classes.orderFooter}>
        <b>{t('orderPrice')}</b>: {orderFilm.orderPrice}$
      </Typography>
    </Accordion>
  );
};
