import React, {Component} from 'react';
import { Grid, TextField, Button, Box, Typography, Card } from '@material-ui/core';
export default class CreateClaim extends Component{
    state = {
        name: '',
        txId: '',
        Caddress: '',
        web3: {},
        contract:{},
        events: [],

        drizzle: {},
        dirzzleState: {},
        Insurance: {},
        flag:false
    };

    componentDidMount(){
        const { web3, contracts } = this.props.drizzle;
        const { Insurance } = contracts;
        const { abi, address } = Insurance;
        const contract = new web3.eth.Contract(abi,address);
    
        this.setState({web3,contract});

        const { drizzle, drizzleState } = this.props;

        this.setState({drizzle, drizzleState, Insurance});

        let events = [];
        contract.events.clientAdded(
            {
                fromBlock: 0
            }, 
            (err, event) => {
                // console.log(event);
                events.push(event);
                this.setState({events});
            }
        );

        // console.log(drizzleState.accounts[0]);
        // console.log(Insurance.methods['addClient']);
        // console.log(this.props.drizzleState);
    }

    handleChange = e => {
        this.setState({name: e.target.value});
    }
    handleAddressChange = e => {
        this.setState({ Caddress: e.target.value });
    }

    handleClick = e => {
        e.preventDefault();
        
        const { Insurance, name, Caddress } = this.state;
        const { accounts } = this.state.drizzleState
        
        const txId = Insurance
            .methods['createClaim']
            .cacheSend(
                name,
                { from: accounts[0] }
            );

        this.setState({ txId, flag: true });

        // console.log(accounts[0]);
        // console.log(name);
    }

    render(){
        const {transactions, transactionStack } = this.props.drizzleState;
        const txHash = transactionStack[this.state.txId];
        // console.log()

        return(
            < Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                xs={12} md={12} lg={12}>

                <Card raised='true' style={{ width: '90vh', padding:"15",justifyContent: 'center', alignContent: 'center', textAlign: 'center' }}>
                   < span  style={{fontSize:30}}>Claim Insurance </span> 
                {this.state.flag === false ?
                        < Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            xs={12} md={12} lg={12}>

                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                                xs={12} md={12} lg={12}
                            >

                                <Grid
                                    xs={11}
                                    md={6}
                                    lg={6}
                                >
                                    <TextField
                                        id="standard-basic"
                                        fullWidth
                                        label="Problem"
                                        margin="normal"
                                        helperText="Enter Problem"
                                        onChange={this.handleChange}
                                    />
                                   
                                < TextField
                                id = "standard-basic"
                                fullWidth
                                label = "Mobile No"
                                margin = "normal"
                              
                                
                                />
                                
                                < TextField
                                id = "standard-basic"
                                fullWidth
                                label = "Email Id"
                                margin = "normal"
                              
                                
                                />












                                    {/* <TextField
                                        id="standard-basic"
                                        fullWidth
                                        label="Address"
                                        margin="normal"
                                        helperText="Enter Address"
                                        name="address"
                                        onChange={this.handleAddressChange}
                                    /> */}

                                    <Button variant="contained" color="primary" onClick={this.handleClick}>
                                        Submit
                        </Button>
                                </Grid>


                            </Grid>


                        </Grid>

                        : <Grid
                            xs={12}
                            md={12}
                            lg={12}
                        >
                            < Typography style={{ textAlign: 'center' }}>
                                <Box fontSize="h4.fontSize" textAlign="center" m={1}>
                                    {transactions[txHash] !== undefined ? transactions[txHash].status === 'error' ? <React.Fragment><h4>Failed Please Try Again</h4>
                                        <Button variant="contained" color="secondary" href="http://localhost:3000" onClick={() => { console.log('go back to previous page...') }}>
                                            Go back
                            </Button>
                                    </React.Fragment> : null : null}
                                    {
                                        transactions[txHash] !== undefined ? transactions[txHash].status === 'success' ? 'Details Successfully Submitted. Please wait for the confirmation from the Insurance company.' : null : null
                                    }

                                </Box>
                            </Typography>

                        </Grid>}

                    <p>{txHash ? `Transaction status: ${transactions[txHash]
                        && transactions[txHash].status}` : null}</p>

                </Card>
            </ Grid>
        )
    }
}

// export default CreateClaim;