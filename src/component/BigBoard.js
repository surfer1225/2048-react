import React, { Component } from 'react';
import MoveButton from './MoveButton.js';
import MidBoard from './MidBoard.js';

class Board extends Component {
  render() {
    return (
      <div>
        <div>
          <MoveButton />
        </div>
        <div>
          <MoveButton />
          <MidBoard />
          <MoveButton />
        </div>
      </div>
    );
  }
}

export default Board;
