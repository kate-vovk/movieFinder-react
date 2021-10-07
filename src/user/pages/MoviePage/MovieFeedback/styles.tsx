import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  feedbackFooter: {
    display: 'flex',
    alignItems: 'center',
    margin: '30px 10px 30px 10px',
  },
  feedbackButton: {
    margin: '0 0 0 20%',
  },
  feedbackList: {
    width: '100%',
    minHeight: '500px',
    margin: 0,
    padding: 0,
    listStyle: 'none',
  },
  feedbackListElement: {
    padding: '5px',
    marginBottom: 5,
    border: '2px solid',
    borderRadius: 10,
    backgroundColor: 'lightGrey',
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
  paginationContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
