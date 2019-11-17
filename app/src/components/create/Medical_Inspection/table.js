import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function Tab(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} style={{marginBottom:2}}>
      <Typography variant="h5" component="h3" style={{marginBottom:2}}>
        {props.heading}
      </Typography>
     <Grid  container
  direction="row"
  justify="center"
  alignItems="center"
  spacing={1}>
         <Grid item xs={3} alignContent="center" style={{ color: "#999999" }}>  
         <Typography variant="h5" >
          {props.par1}
         </Typography>
         </Grid>
         <Grid item xs={3}>
         <Typography variant="h5" alignContent="center" style={{ color: "#999999" }}>
          {props.par2}
         </Typography>
         </Grid>
     </Grid>
     <Grid  container
  direction="row"
  justify="center"
  alignItems="center"
  spacing={1}>
         <Grid item xs={3} alignContent="center">  
         <Typography variant="h6" >
          {props.val1}
         </Typography>
         </Grid>
         <Grid item xs={3}>
         <Typography variant="h6" alignContent="center">
          {props.val2}
         </Typography>
         </Grid>
     </Grid>
    </Paper>
  );
}