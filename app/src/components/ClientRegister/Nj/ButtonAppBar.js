import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Checkout from './Checkout'

import HealthIcon from './healthIcon.jpg'

// import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
 
// }));

const rounded ={
  color: '#fff',
  width: 65,
    height: 65,
    marginTop:'10px'
  //backgroundColor: green[500],
};

const root= {
  flexGrow: 1,
};
const menuButton = {
  // marginRight: spacing(2),
};
const title={
  flexGrow: 1,
  
};
class ButtonAppBar extends Component  {
  //  classes = useStyles();
  constructor(){
    super();

  }
state = {
  login: false,
  fName: "",
  lName:"",
  city:"",
  state:"",
  zip:"",
  country:"",
  address1:"",
  address2:""
};

updateform=(x)=>{

//  if(x.name=='firstName') {this.setState({ fName : x.value})}
//   // if(x.name=='lastName') {this.setState({ lName : x.value})}
//   if(x.name=='address1') {this.setState({ address1 : x.value})}
//   // if(x.name=='address2') {this.setState({ address2 : x.value})}
//   if(x.name=='firstName') {this.setState({ fName : x.value})}
//   if(x.name=='city') {this.setState({ city : x.value})}
//   if(x.name=='state') {this.setState({ state : x.value})}
//   if(x.name=='zip') {this.setState({ zip : x.value})}
//   if(x.name=='country') {this.setState({ country : x.value})}

// console.log(x.value+"xxxxxxxxxxxxx");
this.props.handleDetails(x);


}
  loginHandle=()=>{
    let x=(this.state.login)?false:true;
 this.setState({login:x});

  }
  
  render(){

    //const { classes } = this.props;

  return (
    <div className={root}>
      <AppBar position="static" style={{ height:'90px'}}>
        <Toolbar  >
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Avatar src={HealthIcon} variant="rounded" style={rounded}>
        {/* <AssignmentIcon /> */}
      </Avatar  >
          <Typography variant="h5" style={title}>
            HEALTH INSURANCE
          </Typography>
          <Button color="inherit" onClick={this.loginHandle}>Signup</Button>
        </Toolbar>
      </AppBar>
      {this.state.login?<Checkout {...this.props} updateform={this.updateform} />:null}
    </div>
  )}
}




export default ButtonAppBar;