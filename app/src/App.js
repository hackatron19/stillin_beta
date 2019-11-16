import React, { Component } from 'react';
import { Drizzle, generateStore } from 'drizzle';
import { DrizzleContext } from 'drizzle-react';
import drizzleOptions from './drizzleOptions';
import Container from './components/Container';
import './css/basic.css';

const drizzleStore = generateStore(drizzleOptions);
const drizzle = new Drizzle(drizzleOptions, drizzleStore);

class App extends Component {
  constructor(){
    super()
  }
  render() {
    // console.log(drizzle);
    return (
      <DrizzleContext.Provider drizzle={drizzle} >
        <Container/>
      </DrizzleContext.Provider>
    );
  }
}

export default App;
