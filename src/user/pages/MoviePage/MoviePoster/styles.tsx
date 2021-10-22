import { makeStyles } from '@material-ui/core';

export const useStyle = makeStyles(() => ({
  columnLeft: {
    flex: '0 0 350px',
  },
  poster: {
    position: 'relative',
    marginBottom: '10px',
    minHeight: '250px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
  },
  posterImage: {
    width: '100%',
  },
  posterRate: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '5px',
    fontSize: '12px',
    backgroundColor: '#fff',
    borderRadius: '5px',
  },
  posterRateIcon: {
    marginRight: '5px',
    width: '15px',
    color: 'yellow',
  },
  posterRateText: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  rateContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '10px 0 0 0',
  },
}));
