import React, { Component } from "react";
import Players from './Players.js';
import $ from 'jquery';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {code: this.props.match.params.code, game: [], errorMessage: ''};
  }

  componentDidMount() {
    $.get("http://www.api.local/app_dev.php/api/game/" + this.state.code).then((data) => {
      $( ".result" ).html( data );

      console.log(data);

      this.setState({
        game: data[0]
      });

    }).fail(function(data) {
      if (data.responseJSON)
      {
        this.setState({
          errorMessage: data.responseJSON.message
        });
      }
    }.bind(this));
  }

  render() {

    if (this.state.game.id !== undefined) {

      const players = this.state.game.players;

      return (
        <div>
          <h2>Game</h2>
          <Players players={players}/>
          {this.state.errorMessage}
        </div>
      );
    }
    else {
      return (
        <div>

        </div>
      );
    }


  }
}

export default Game;