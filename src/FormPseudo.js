import React, { Component } from 'react';
import './FormPseudo.css';

class FormPseudo extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value.toUpperCase()});
  }

  handleSubmit(event) {

    this.props.callback(this.state.value);

    event.preventDefault();
  }

  render() {
    return (
      <div className="FormPseudo">
        <form onSubmit={this.handleSubmit}>
          <input className="Input" placeholder="VOTRE PSEUDO" maxLength="15" type="text" name="code" value={this.state.value} onChange={this.handleChange}/>
          <input className="Button" type="submit" value="✓" />
        </form>
      </div>
    );
  }
}

export default FormPseudo;
