import React, { Component } from 'react';
import BoardButton from './BoardButton.js';

class MidBoard extends Component {

  render() {
    return (
      <div>
        <div>
          <BoardButton value={this.props.buttons[0]}/>
          <BoardButton value={this.props.buttons[1]}/>
          <BoardButton value={this.props.buttons[2]}/>
          <BoardButton value={this.props.buttons[3]}/>
        </div>
        <div>
          <BoardButton value={this.props.buttons[4]}/>
          <BoardButton value={this.props.buttons[5]}/>
          <BoardButton value={this.props.buttons[6]}/>
          <BoardButton value={this.props.buttons[7]}/>
        </div>
        <div>
          <BoardButton value={this.props.buttons[8]}/>
          <BoardButton value={this.props.buttons[9]}/>
          <BoardButton value={this.props.buttons[10]}/>
          <BoardButton value={this.props.buttons[11]}/>
        </div>
        <div>
          <BoardButton value={this.props.buttons[12]}/>
          <BoardButton value={this.props.buttons[13]}/>
          <BoardButton value={this.props.buttons[14]}/>
          <BoardButton value={this.props.buttons[15]}/>
        </div>
      </div>
    );
  }
}

export default MidBoard;
