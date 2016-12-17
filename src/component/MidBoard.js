import React, { Component } from 'react';
import BoardButton from './BoardButton.js';

class MidBoard extends Component {
  render() {
    return (
      <div>
        <div>
          <BoardButton/>
          <BoardButton/>
          <BoardButton/>
          <BoardButton/>
        </div>
        <div>
          <BoardButton/>
          <BoardButton/>
          <BoardButton/>
          <BoardButton/>
        </div>
        <div>
          <BoardButton/>
          <BoardButton/>
          <BoardButton/>
          <BoardButton/>
        </div>
        <div>
          <BoardButton/>
          <BoardButton/>
          <BoardButton/>
          <BoardButton/>
        </div>
      </div>
    );
  }
}

export default MidBoard;
