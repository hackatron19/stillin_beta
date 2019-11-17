import React, {Component} from 'react';

class VerifierReview extends Component {
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
                let x=[...this.state.addresses,event.returnValues[0]];
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
                            if(result.state==='1'){
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
            .methods['approveClaim']
            .cacheSend(
                e, {
                    from: accounts[0]
                }
            );

    }
    handleClickDash = e => {
        const { Insurance, accounts } = this.state;
        const txId = Insurance
            .methods['rejectClaimVerifier']
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
                                Name: {e.name}<br/>
                                Address: {e.address}
                                <button onClick={()=>this.handleClick(e.address)}>Accept</button>
                                <button onClick={()=>this.handleClickDash(e.address)}>Reject</button>
                            </div>
                        )
        });
        return(
            <div>
                {un}
            </div>
        )
    }
}

export default VerifierReview;