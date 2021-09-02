import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  feedbackFooter: {
    display: 'flex',
    alignItems: 'center',
    margin: '30px 10px 30px 10px',
  },
  feedbackButton: {
    margin: '0 0 0 50%',
  },
  feedbackList: {
    margin: '0 0 0 0',
    padding: '0 0 0 0',
    listStyle: 'none',
  },
  feedbackListElement: {
    padding: '0 0 25px 0',
  },
  feedbackListElementHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 0 15px 0',
  },
  feedbackListElementTitle: {
    margin: '0 0 0 0',
  },
  feedbackListElementRate: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  feedbackListElementRateIcon: {
    margin: '0 5px 0 0',
    width: '15px',
    color: 'yellow',
  },
  feedbackListElementRateText: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  feedbackText: {
    margin: '0 0 0 0',
    padding: '0 0 0 0',
    lineHeight: '150%',
  },
}));
