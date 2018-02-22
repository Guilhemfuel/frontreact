import React, { Component } from 'react';
import FormPseudo from './FormPseudo.js';
import FormGame from './FormGame.js';
import './Transition.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {pseudo: '', code: '', hideInput: false};
  }

  setPseudo = (state) => {
    this.setState({
        pseudo: state,
        hideInput: true
      }, function() {
        console.log(this.state.pseudo);
        window.sessionStorage.setItem("pseudo", this.state.pseudo);

      }
    );
  };

  onChildChanged = (state) => {
    this.setState({ code: state[0].code });
    window.location.href='/game/' + this.state.code;
  };

  render() {
    return (
      <div className="Home">
        <div className={`position ${this.state.hideInput ? 'alert-hidden' : 'alert-shown'}`}>
          <FormPseudo callback={this.setPseudo}/>
        </div>
        <div className={`position ${this.state.hideInput ? 'alert-shown' : 'alert-hide'}`}>
          <FormGame callback={this.onChildChanged}/>
        </div>
      </div>
    );
  }
}

export default Home;