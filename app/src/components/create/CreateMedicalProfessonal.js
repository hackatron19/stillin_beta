import React, {Component} from 'react';

class CreateMedicalProfessional extends Component{
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
        contract.events.medicalProfessionalAdded(
            {
                fromBlock: 0
            }, 
            (err, event) => {
                console.log(event);
                events.push(event);
                this.setState({events});
            }
        );

        // console.log(drizzleState.accounts[0]);
        // console.log(Insurance.methods['addClient']);
        // console.log(this.props.drizzleState);
    }

    handleNameChange = e => {
        this.setState({name: e.target.value});
    }

    handleAddressChange = e => {
        this.setState({address: e.target.value});
    }

    handleClick = e => {
        e.preventDefault();
        
        const { Insurance, name, address } = this.state;
        const { accounts } = this.state.drizzleState
        
        const txId = Insurance
            .methods['addMedicalProfessional']
            .cacheSend(
                address, name,
                {from: accounts[0]}
            );


        // console.log(Insurance.methods['addMedicalProfessional']);
        // console.log(accounts[0]);
        // console.log(name);
    }
    render(){
        const {transactions, transactionStack } = this.props.drizzleState;
        const txHash = transactionStack[this.state.txId];
        // console.log()

        return(
            <div>
                <form>
                    Enter Medical Professional's name: <input type="text" onChange={this.handleNameChange} 
                    id="name"/>
                    <br/>
                    Enter Medical Professional's address: <input type="text" onChange={this.handleAddressChange} 
                    id="name"/>
                    <br/>
                    <button onClick={this.handleClick}>Submit</button>
                </form>
                <p>{txHash ? `Transaction status: ${transactions[txHash]
                && transactions[txHash].status}`: null}</p>
            </div>
        )
    }
}

export default CreateMedicalProfessional;