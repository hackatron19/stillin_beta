import React, {Component} from 'react';
import ButtonAppBar from '../ClientRegister/Nj/ButtonAppBar';

class CreateClient extends Component{
    state = {
        name: '',
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

    handleDetails = ( param )=>{
        console.log(param);
        
    }

    handleClick = e => {
        e.preventDefault();
        
        const { Insurance, name } = this.state;
        const { accounts } = this.state.drizzleState
        
        const txId = Insurance
            .methods['addClient']
            .cacheSend(
                accounts[0], name,
                {from: accounts[0]}
            );

        // console.log(accounts[0]);
        // console.log(name);
    }

    render(){
        const {transactions, transactionStack } = this.props.drizzleState;
        const txHash = transactionStack[this.state.txId];
        // console.log()

        return(
            <div>
                < ButtonAppBar handleDetails = {
                    this.handleDetails
                }
                />

                <form>
                    Enter Client name: <input type="text" onChange={this.handleChange} 
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

export default CreateClient;