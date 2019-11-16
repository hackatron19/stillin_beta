import React, {Component} from 'react';

class VerifiersList extends Component{
    state = {
        name: '',
        address: '',
        txId: '',

        web3: {},
        contract:{},
        events: [],

        drizzle: {},
        dirzzleState: {},
        Insurance: {},
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
        contract.events.verifierAdded(
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

    render(){
        let { events } = this.state;
        // events.sort((a,b) => (
            
        // ))
        console.log(events);
        return(
            <div>
                {
                    events.map(event => (
                        <div key={event.transactionHash}>
                            Name: {event.returnValues[1]}<br/>
                            Address: {event.returnValues[0]}
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default VerifiersList;