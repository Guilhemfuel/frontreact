import React, { Component } from 'react';

class Players extends Component {

  constructor(props) {
    super(props);

    this.state = {player: this.props.players};
  }

  render() {

    console.log('xd', this.state.player);

    const players = this.state.player.map((item, i) => (
      <div key={i}>
        <h1>{ item.name }</h1>
        <span>{ item.score }</span>
      </div>
    ));

    return (
      <div>
        { players }
      </div>
    );
  }
}

export default Players;