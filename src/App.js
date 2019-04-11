import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormContainer from './containers/builder/FormContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
        <FormContainer />
      </div>
    );
  }
}

export default App;
