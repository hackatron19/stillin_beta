import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default class AddressForm extends Component{
  // const handleForm =(e) =>{
  //   console.log(e.target.name +  "   " +e.target.value);
  //   if(e.target.value==='')
  //   console.log('enpty field')
  // 

  state = {
    name: '',
    txId: '',

    web3: {},
    contract: {},
    events: [],

    drizzle: {},
    dirzzleState: {},
    Insurance: {},
  };

 niraj = (e) => {
    const x = {
      name: e.target.name,
      value: e.target.value
    };

  }

  componentDidMount() {
    const {
      web3,
      contracts
    } = this.props.drizzle;
    const {
      Insurance
    } = contracts;
    const {
      abi,
      address
    } = Insurance;
    const contract = new web3.eth.Contract(abi, address);

    this.setState({
      web3,
      contract
    });

    const {
      drizzle,
      drizzleState
    } = this.props;

    this.setState({
      drizzle,
      drizzleState,
      Insurance
    });

    let events = [];
    contract.events.clientAdded({
        fromBlock: 0
      },
      (err, event) => {
        // console.log(event);
        events.push(event);
        this.setState({
          events
        });
      }
    );

    // console.log(drizzleState.accounts[0]);
    // console.log(Insurance.methods['addClient']);
    // console.log(this.props.drizzleState);
  }


  handleClick = e => {
    e.preventDefault();

    const {
      Insurance,
      name
    } = this.state;
    const {
      accounts
    } = this.state.drizzleState

    const txId = Insurance
      .methods['addClient']
      .cacheSend(
        accounts[0], name, {
          from: accounts[0]
        }
      );

    // console.log(accounts[0]);
    // console.log(name);
  }





render(){


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Enter your personal details : 
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Name"
            fullWidth
            autoComplete="fname"
            onChange={this.niraj}
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
            onChange={niraj}
          />
        </Grid> */}
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line"
            fullWidth
            autoComplete="billing address-line1"
            onChange={this.niraj}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="billing address-line2"
            onChange={niraj}
          />
        </Grid> */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
            onChange={this.niraj}

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
          id="state" 
          name="state" 
          label="State/Province/Region" 
          fullWidth 
          onChange={this.niraj}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
            onChange={this.niraj}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="billing country"
            onChange={this.niraj}
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
      }
}