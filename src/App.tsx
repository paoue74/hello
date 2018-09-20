import './App.css';

import * as React from 'react';

import HelloRecomposeContainer from './hellorecompose/HelloRecompose.container';
import logo from './logo.svg';

export class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React recompose test</h1>
        </header>
       <HelloRecomposeContainer />
      </div>
    );
  }
}

export default App;
