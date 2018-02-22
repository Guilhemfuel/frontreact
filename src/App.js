import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    console.log(window.sessionStorage.getItem("pseudo"));

    return (
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

       <Routes/>

      </div>
    );
  }
}

export default App;
