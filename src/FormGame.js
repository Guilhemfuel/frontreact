import React, { Component } from 'react';
import './FormPseudo.css';
import $ from 'jquery';

class FormGame extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', game: '', errorMessage: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value.toUpperCase()});
  }

  onChange(data) {
    this.props.callback(data);
  }

  handleSubmit(event) {

    $.get("http://www.api.local/app_dev.php/api/game/" + this.state.value).then((data) => {
      $( ".result" ).html( data );

      console.log(data);

      this.setState({
        value: '',
        game: data
      });

      this.onChange(this.state.game);
    }).fail(function(data) {
      this.setState({
        errorMessage: data.responseJSON.message
      });

    }.bind(this));

    event.preventDefault();
  }

  render() {
    return (
      <div className="FormGame">
        <form onSubmit={this.handleSubmit}>
          <input className="Input" placeholder="CODE PARTIE" maxLength="4" type="text" name="code" value={this.state.value} onChange={this.handleChange}/>
          <input className="Button" type="submit" value="✓" />
        </form>
        <div className="Error-message">{this.state.errorMessage}</div>
      </div>
    );
  }
}

export default FormGame;
