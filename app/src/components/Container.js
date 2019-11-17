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
import ContainerHomePage from './ContainerHomePage';

const Container = (props) =>(
 
    <DrizzleContext.Consumer>
      { 
        drizzleContext =>{
          // console.log(drizzleContext);
          const { initialized, drizzleState, drizzle } = drizzleContext;
          console.log(drizzleState);
          return(
          <LoadingComponent initialized={initialized}>
            <div>
              {/* <div id="heading">
                <h1>Medical Insurance Application</h1>
              </div> */}



              <ContainerHomePage drizzleState={drizzleState} drizzle={drizzle} />
              {/* <CreateClient drizzleState={drizzleState} drizzle={drizzle}/> */}
              {/* <CreateMedicalProfessional drizzleState={drizzleState} drizzle={drizzle}/> */}
              {/* <CreateVerifier drizzleState={drizzleState} drizzle={drizzle}/> */}

              {/* <ClientList drizzleState={drizzleState} drizzle={drizzle}/> */}
              {/* <RegisterClient drizzleState={drizzleState} drizzle={drizzle}/> */}
              {/* <MedicalProfessionalsList drizzleState={drizzleState} drizzle={drizzle}/> */}
              {/* <VerifiersList drizzleState={drizzleState} drizzle={drizzle}/> */}

              {/* <CreateClaim drizzleState={drizzleState} drizzle={drizzle}/> */}
              {/* <MedicalReview drizzleState={drizzleState} drizzle={drizzle}/> */}

              {/* <VerifierReview drizzleState={drizzleState} drizzle={drizzle}/> */}
              {/* <WriteData drizzleState={drizzleState} drizzle={drizzle}/> */}
              {/* <ReadData drizzleState={drizzleState} drizzle={drizzle}/> */}
           </div>
          </LoadingComponent>
        );
        }
      }
    </DrizzleContext.Consumer>
);

export default Container;