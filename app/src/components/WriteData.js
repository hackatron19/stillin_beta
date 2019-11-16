import React, { Component } from 'react';

class WriteData extends Component{
  state = {
    data:'',
    txId:''
  };

  handleChange = e =>{
    this.setState({data:e.target.value});
  }

  handleClick = e =>{
    e.preventDefault();
    const { drizzle, drizzleState } = this.props;
    const { data } = this.state;
    const Whistleblower = drizzle.contracts.Whistleblower;

    const txId = Whistleblower
      .methods['setData']
      .cacheSend(
        data,
        {from: drizzleState.accounts[0]}
        );
    this.setState({txId});
  }
  
  render(){
    const { transactions, transactionStack } = this.props.drizzleState;
    const txHash = transactionStack[this.state.txId];
    return(
      <div id="form">
        <form>
          <textarea onChange={this.handleChange} id="input" 
            placeholder="Provide links to image/doc evidence if possible.">
          </textarea>
          <button onClick={this.handleClick}>Submit</button>
        </form>
        <p>{txHash ? `Transaction status: ${transactions[txHash]
        && transactions[txHash].status}`: null}</p>
      </div>
    );
  }
}

export default WriteData;
