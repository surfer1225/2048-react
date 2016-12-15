import React, { Component } from 'react';
import MoveButton from './MoveButton.js';

class Board extends Component {
  render() {
    return (
      <div>
        <div>
          <MoveButton/>
        </div>
        <div>
          <MoveButton/>
          <MoveButton/>
        </div>
      </div>
    );
  }
}

export default Board;
