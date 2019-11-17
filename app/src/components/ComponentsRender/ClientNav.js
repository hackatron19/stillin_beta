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
// import Checkout from './Checkout'
import healthbackg from './healthbackg.jpg'
import HealthIcon from './healthIcon.jpg'
import CreateClaim from '../transactions/CreateClaim';
import CreateClient from '../create/CreateClient';

import '../../css/App.css';

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
  marginLeft:680
  
};
class ClientNav extends Component  {
  //  classes = useStyles();
  constructor(){
    super();
    console.log('clientNav')
  }
state={login:false,claim:false};

  loginHandle=()=>{
    let x=(this.state.login)?false:true;
 this.setState({login:x,claim:false});
  }
  
claimHandle = () => {
    let x = (this.state.claim) ? false : true;
    this.setState({
        login: false,claim:x
    });
}



  render(){

    //const { classes } = this.props;

        const { drizzle, drizzleState } = this.props;
  return (
    <div className={root} style={{marginTop:-8}}>
      < AppBar position = "static"
     
       style = {
          {
              height: '90px',
          }
      } >
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
          {/* <Button color="inherit" onClick={this.loginHandle}>Register</Button> */}
           <Button color="inherit" onClick={this.claimHandle}>Claim</Button>
        </Toolbar>
      </AppBar>
         
      {/* {this.state.login?<CreateClient drizzleState={drizzleState} drizzle={drizzle}/>:null} */}
         
          {this.state.login===false && this.state.claim===false ?  <div className="App">
      <header className="App-header">
       
     <img src={healthbackg} className="App-logo" alt="logo" />
       
      </header>
    </div> :null}

     <br/><br/><br/>

      {this.state.claim?<CreateClaim drizzleState={drizzleState} drizzle={drizzle}/>:null}
    
    </div>
  )}
}




export default ClientNav;