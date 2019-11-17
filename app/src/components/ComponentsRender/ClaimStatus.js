import React, {Component} from 'react';
import { Grid, TextField, Button, Box, Typography, Card } from '@material-ui/core';


class ClaimStatus extends Component {
    state = {
        name: '',
        address: '',
        txId: '',

        web3: {},
        contract:{},
        addresses: [],
       
        drizzle: {},
        dirzzleState: {},
        accounts:[],
        Insurance: {},
        unverified:[]
    };

    componentDidMount(){
        const { web3, contracts } = this.props.drizzle;
        const { Insurance } = contracts;
        const { abi, address } = Insurance;
        const contract = new web3.eth.Contract(abi,address);
        
        this.setState({web3,contract});

        const { accounts } = this.props.drizzleState;
        // console.log(accounts);

        const { drizzle, drizzleState } = this.props;

        this.setState({drizzle, drizzleState, Insurance, accounts});

        
        

        contract.events.claimCreated(
            {
                fromBlock: 0
            }, 
            (err, event) => {
                // console.log("heeeeeeeeeeeeeee");
                console.log(event);
                let x=[...this.state.addresses, event.returnValues[0]];
                console.log(x);
                this.setState({
                    addresses:x
                },
                ()=>{this.state.addresses.forEach((ind)=>{
                    console.log(ind + " jhsagdfyagyugf");
                    Insurance.methods.claims(ind).call({
                            from: accounts[0]
                        })
                        .then((result) => {
                            console.log(result);
                            // console.log(add);
                            if(result.state==='0'){
                                let obj = {



                                    name: result.name,
                                    prob:result.file,
                                    address: ind
                                }
                                let un=[...this.state.unverified,obj];
                                this.setState({
                                    unverified:un
                                },()=>{console.log(this.state.unverified)});
                            }
                        })
                }
                )
                         
                }
                
                
                
                
                )
            }
        );
    }

    handleClick = e => {
        const { Insurance, accounts } = this.state;
        const txId = Insurance
            .methods['checkClaim']
            .cacheSend(
                e, {
                    from: accounts[0]
                }
            );

    }
    handleClickDash = e => {
        const { Insurance, accounts } = this.state;
        const txId = Insurance
            .methods['rejectClaimMedical']
            .cacheSend(
                e, {
                    from: accounts[0]
                }
            );

    }

    render(){
        let un = this.state.unverified.map((e)=>{
            return(
                            <div key={e.address}>



          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            xs={12}
            md={12}
            lg={12}
          >
            <Card
              raised="true"
              style={{
                width: "90vh",
                justifyContent: "center",
                alignContent: "center",
                textAlign: "center",
                padding:15
              }}
            >
             < span style={{fontSize:"30px"}} > Medical Review </span>
               <TextField
                        id="standard-basic"
                        fullWidth
                        label="Name"
                        margin="normal"
                       
                        value={e.name}
                      />

                      <TextField
                        id="standard-basic"
                        fullWidth
                        label="Claim #"
                        margin="normal"
                      
                        name="address"
                       value={e.address}
                      />
                         <Button
                        variant="contained"
                        color="primary"
                        onClick={()=>this.handleClick(e.address)}
                      >
                        Verify
                      </Button>
                       <Button
                        variant="contained"
                        color="primary"
                        onClick={()=>this.handleClickDash(e.address)}
                      >
                        Reject
                      </Button>
                        <br/>
                     </Card>
                    </Grid>
                    <br/>
                                {/* Name: <br/>
                                Address: 
                                <button onClick={()=>this.handleClick(e.address)}>Accept</button>
                                <button onClick={()=>this.handleClickDash(e.address)}>Reject</button> */}
                            </div>
                        )
        });
        return(
            < div style = {
                {
                    padding: 15
                }
            } >
                {un}
            </div>
        )
    }
}

export default ClaimStatus;