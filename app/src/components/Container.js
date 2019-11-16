import React from 'react';
import { DrizzleContext } from 'drizzle-react';
import LoadingComponent from './LoadingComponent';
// import ReadData from './ReadData';
// import WriteData from './WriteData';
import CreateClient from './create/CreateClient';
import CreateMedicalProfessional from './create/CreateMedicalProfessonal';
import Checkout from './ClientRegister/Checkout';
import ButtonAppBar from './ClientRegister/Nj/ButtonAppBar';

const Container = (props) =>(
 
    <DrizzleContext.Consumer>
      { 
        drizzleContext =>{
          // console.log(drizzleContext);
          const { initialized, drizzleState, drizzle } = drizzleContext;
          // console.log(drizzleState);
          return(
          <LoadingComponent initialized={initialized}>
            <div>
              <div id="heading">
                <h1>Medical Insurance Application</h1>
              </div>
              {/* <CreateClient drizzleState={drizzleState} drizzle={drizzle}/> */}
              {/* <Checkout  drizzleState={drizzleState} drizzle={drizzle}/>     */}
              <ButtonAppBar drizzleState={drizzleState} drizzle={drizzle} />
              {/* <CreateMedicalProfessional drizzleState={drizzleState}  drizzle={drizzle}/> */}
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