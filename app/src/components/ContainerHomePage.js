import React from 'react';
import { DrizzleContext } from 'drizzle-react';
import LoadingComponent from './LoadingComponent';
import CreateVerifier from "./create/CreateVerifier";
import CreateClient from './create/CreateClient';
import CreateMedicalProfessional from './create/CreateMedicalProfessonal';
import ClientList from "./lists/Clients";
import MedicalProfessionalsList from "./lists/MedicalProfessionals";
import VerifiersList from "./lists/Verifiers";
import RegisterClient from "./create/RegisterClient";
import CreateClaim from "./transactions/CreateClaim"
import MedicalReview from './transactions/MedicalReview';
import VerifierReview from './transactions/VerifierReview';
import VerifierApp from './VerifierApp';
import ClientNav from './ComponentsRender/ClientNav'
import OfficerNav from './ComponentsRender/OfficerNav';

class ContainerHomePage extends React.Component{
    state = {
        id:'0'
    };
    componentDidMount(){
        const { web3, contracts } = this.props.drizzle;
        const { Insurance } = contracts;
        const { abi, address } = Insurance;
        const contract = new web3.eth.Contract(abi,address);
        

        const { accounts } = this.props.drizzleState;
        const { drizzle, drizzleState } = this.props;

        Insurance.methods.verifiers(accounts[0]).call({
            from: accounts[0]
        })
        .then((result) => {
            console.log("yeeeeeee");
            console.log(result);
            if(result.valid == true)
                this.setState({id:1});
        });

        Insurance.methods.medicalProfessionals(accounts[0]).call({
            from: accounts[0]
        })
        .then((result) => {
            console.log("yeeeeeee222");
            console.log(result);
            if(result.valid == true)
                this.setState({id:2});
        });

        Insurance.methods.clients(accounts[0]).call({
            from: accounts[0]
        })
        .then((result) => {
            console.log("yeeeeeee333");
            console.log(result);
            if(result.state == 2)
                this.setState({id:3});
            // else if(this.state.id!=0)
            //     this.setState({id:4});
        });

    }
    render(){
        const { drizzle, drizzleState } = this.props;
        console.log(this.state.id + "   ghjiku87y6tfrvghbujiko");
        return (
          <div>
            {this.state.id == 1 ? (
              <VerifierApp drizzleState={drizzleState} drizzle={drizzle} />
            ) : null}
            {/* <OfficerNav drizzleState={drizzleState} drizzle={drizzle}/> */}
            {this.state.id == 2 ? <OfficerNav drizzleState={drizzleState} drizzle={drizzle}/>: null}
            {this.state.id == 3 ?<ClientNav drizzleState={drizzleState} drizzle={drizzle} /> : null} 
            {/* { this.state.id == 3 ?: null}  */}
            {this.state.id == 0 ? (
              <CreateClient drizzleState={drizzleState} drizzle={drizzle} />
            ) : null}
          </div>
        );
    }
    
};

export default ContainerHomePage;