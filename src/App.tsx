import * as React from 'react';
import './App.css';

import HelloContainer from './hello/Hello.container';
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React recompose test</h1>
        </header>
       <HelloContainer />
      </div>
    );
  }
}

export default App;
