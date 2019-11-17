import React, {Component} from 'react';
import { Grid, TextField, Button, Box, Typography, Card } from '@material-ui/core';

class RegisterClient extends Component{
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

        
        contract.events.clientAdded(
            {
                fromBlock: 0
            }, 
            (err, event) => {
                console.log("heeeeeeeeeeeeeee");
                let x=[...this.state.addresses,event.returnValues[0]];
                console.log(x);
                this.setState({
                    addresses:x
                },
                ()=>{this.state.addresses.forEach((add)=>{
                    Insurance.methods.clients(add).call({
                            from: accounts[0]
                        })
                        .then((result) => {
                            console.log(result);
                            console.log(add);
                            if(result.verified===false){
                                let obj = {
                                    name: result.name,
                                    address: add
                                }
                                let un=[...this.state.unverified,obj];
                                this.setState({
                                    unverified:un
                                },()=>{console.log(this.state.unverified)});
                            }
                        })
                })
                         
                }
                
                
                
                
                )
            }
        );
    }

    handleClick = e => {
        const { Insurance, accounts } = this.state;
        const txId = Insurance
            .methods['registerClient']
            .cacheSend(
                e, {
                    from: accounts[0]
                }
            );

    }

    render(){
        let un = this.state.unverified.map((e)=>{
            return (
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
                      padding: 15
                    }}
                  >
                    <span style={{ fontSize: "30px" }}>
                      {" "}
                      Client Verification{" "}
                    </span>

                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      xs={12}
                      md={12}
                      lg={12}
                    >
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        xs={12}
                        md={12}
                        lg={12}
                      >
                        <Grid xs={11} md={6} lg={6}>
                          <TextField
                            id="standard-basic"
                            fullWidth
                            label="Name"
                            margin="normal"
                            value={e.name}
                            // helperText="Enter Name"
                            // onChange={this.handleChange}
                          />

                          <TextField
                            id="standard-basic"
                            fullWidth
                            label="Address"
                            margin="normal"
                            // helperText="Enter Address"
                            name="address"
                            value={e.address}
                            // onChange={this.handleAddressChange}
                          />

                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => this.handleClick(e.address)}
                          >
                            Verify
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
                {/* Name: {e.name}
                <br />
                Address: {e.address} */}
                {/* <button onClick={() => this.handleClick(e.address)}>
                  Verify
                </button> */}
              </div>
            );
        });
        return(
            <div>
                {un}
            </div>
        )
    }
}

export default RegisterClient;