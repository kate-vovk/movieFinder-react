import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  modalBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '150px',
    textAlign: 'center',
    background: '#fff',
    border: '2px solid #999',
    borderRadius: '10px',
    padding: '50px',
    boxShadow: '24',
    p: 4,
  },
  modalFooter: {
    display: 'flex',
  },
  modalButton: {
    background: 'aqua',
    padding: '0 30px',
    display: 'inline-block',
    margin: '50px 0 15px 100px',
  },
}));
