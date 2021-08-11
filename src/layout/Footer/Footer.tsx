import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
      // marginTop: theme.spacing(8),
      padding: theme.spacing(6, 0),
    },
  }));

  
export const Footer: React.FunctionComponent = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Paper>
            <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
            </Paper>
             
        </footer>
    )
}
