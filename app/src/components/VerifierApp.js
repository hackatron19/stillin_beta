import React, { Component } from 'react'
import CreateVerifier from './create/CreateVerifier';
import CreateMedicalProfessional from './create/CreateMedicalProfessonal';
import RegisterClient from './create/RegisterClient'
import VerifierReview from './transactions/VerifierReview';
import {
    Grid,
    TextField,
    Button,
    Box,
    Typography,
    Card
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default class VerifierApp extends Component {
    state={
        client:false,
        medical:false,
        verifier:false,
        claimAcceptance:false,
    }
    registerHandle=()=>{
        this.setState({
            client:!this.state.client,
            // client: false,
                medical: false,
                verifier: false,
                claimAcceptance: false,
        })
    }

    medicalHandle = () => {
        this.setState({
            medical: !this.state.medical,
            client: false,
                // medical: false,
                verifier: false,
                claimAcceptance: false,
        })
    }
    verifierHandle = () => {
        this.setState({
            verifier: !this.state.verifier,
            client: false,
                medical: false,
                // verifier: false,
                claimAcceptance: false,
        })
    }
    claimHandle = () => {
        this.setState({
            claimAcceptance: !this.state.claimAcceptance,
            client: false,
                medical: false,
                verifier: false,
                // claimAcceptance: false,
        })
    }

    render() {
        const { drizzle, drizzleState } = this.props;
        return (
            <div>
                <h2 style={{textAlign:'center'}}>Health Insurance</h2>
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
          {/* <Avatar src={HealthIcon} variant="rounded" style={rounded}> */}
        {/* <AssignmentIcon /> */}
      {/* </Avatar  > */}
          
          {/* <Toolbar style={{float:'right'}}> */}
          <Button style={{float:'right!important'}} color="inherit" onClick={this.registerHandle}>Register client</Button>
           <Button style={{float:'right!important'}} color="inherit" onClick={this.medicalHandle}>Medical Officer</Button>

          <Button style={{float:'right!important'}} color="inherit" onClick={this.verifierHandle}>Create Verifier</Button>
           <Button style={{float:'right!important'}} color="inherit" onClick={this.claimHandle}>Claim Review</Button>
           
        </Toolbar>
      </AppBar>
      <br/>
      <br/>
            {this.state.client===true? 
             <RegisterClient drizzleState={drizzleState} drizzle={drizzle} />
            :null}
         
         {this.state.medical===true?
          <CreateMedicalProfessional drizzleState={drizzleState} drizzle={drizzle}/>
         :null}
                  {this.state.verifier === true ? 
                  <CreateVerifier drizzleState={drizzleState} drizzle={drizzle}/>
                  : null }         
                  {this.state.claimAcceptance===true?
                    <VerifierReview drizzleState={drizzleState} drizzle={drizzle}/>
                  :null}
               
               
                
              
            </div>
        )
    }
}
