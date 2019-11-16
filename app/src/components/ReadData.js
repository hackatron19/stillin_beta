import React, { Component } from 'react';

class ReadData extends Component{
  state = {
    web3:{},
    contract:{},
    events:[]
  };

  componentDidMount(){
    const { web3, contracts } = this.props.drizzle;
    const { Whistleblower } = contracts;
    const { abi, address } = Whistleblower;
    const contract = new web3.eth.Contract(abi,address);

    this.setState({web3,contract});
    let events = [];
    contract.events.logAdded(
      {
        fromBlock:0
      },
      (error,event)=>{
        console.log(event);
        events.push(event);
        this.setState({events});
      });
  }

  render(){
    let { events } = this.state;
    events.sort((a,b)=>(
      b.returnValues[1] - a.returnValues[1]
    ));
    return(
      <div>
        {
          events.map((event)=>{
            let unix_timestamp = event.returnValues[1];
            let date = new Date(unix_timestamp*1000);
            date = date.toLocaleString();
            return(
            <div key={event.transactionHash} className={"box"}>
              <span><b>Date: </b>{date}</span>
              <div>{event.returnValues[0]}</div>
              <span><b>Address: </b>{event.returnValues[2]}</span>
            </div>
          )}
          )
        }
      </div>
    )
  }
}

export default ReadData;
