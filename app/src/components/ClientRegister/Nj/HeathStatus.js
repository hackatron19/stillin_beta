import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function HeathStatus() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Primary Health Checkup 
      </Typography>
      <br/><br/>
      <Grid container spacing={3}>
      <Typography variant="h6" >
         This is to be uploaded by an assigned doctor of ours. So visit any of our nearby stations for the primary health Checkup.
         <br/><br/><br/>
         Only after the updation of the health checkup you would be applicable for any sort of claim. 
         </Typography>
      </Grid>

      {/* <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Name on card" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="cardNumber" label="Card number" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Expiry date" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid> */}
    </React.Fragment>
  );
}