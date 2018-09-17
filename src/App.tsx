import './App.css';

import * as React from 'react';

import HelloSFCContainer from './hellosfc/HelloSFC.container';
import logo from './logo.svg';

export class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React recompose test</h1>
        </header>
       <HelloSFCContainer />
      </div>
    );
  }
}

export default App;
