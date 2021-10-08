import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  mainContentContainer: {
    width: '90%',
  },
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
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  feedbackSidemenu: {
    width: '5%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  feedbackRate: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  feedbackRateIcon: {
    margin: '0 5px 0 0',
    width: '15px',
    color: 'yellow',
  },
  feedbackRateText: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  feedbackText: {
    margin: '0 0 0 0',
    padding: '0 0 0 0',
  },
  feedbackElementEdit: {
    padding: 10,
  },
  feedbackElementEditTextContainer: {
    backgroundColor: 'white',
  },
  feedbackElementEditButtonsContainer: {
    marginTop: 5,
  },
  feedbackElementEditButton: {
    marginRight: 5,
    backgroundColor: 'white',
  },
  paginationContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
