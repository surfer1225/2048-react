import React, { Component } from 'react';
import MoveButton from './MoveButton.js';
import MidBoard from './MidBoard.js';

class Board extends Component {
  render() {
    return (
      <div>
        <div>
          <MoveButton value="left"/>
          <MoveButton value="up"/>
          <MoveButton value="down"/>
          <MoveButton value="right"/>
        </div>
        <br/>
        <div>
          <MidBoard />
        </div>
      </div>
    );
  }
}

export default Board;
