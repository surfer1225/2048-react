import React, { Component } from 'react';
import BoardButton from './BoardButton.js';

class MidBoard extends Component {

  render() {
    return (
      <div>
        <div>
          <BoardButton value={this.props.buttons[0][0]}/>
          <BoardButton value={this.props.buttons[0][1]}/>
          <BoardButton value={this.props.buttons[0][2]}/>
          <BoardButton value={this.props.buttons[0][3]}/>
        </div>
        <div>
          <BoardButton value={this.props.buttons[1][0]}/>
          <BoardButton value={this.props.buttons[1][1]}/>
          <BoardButton value={this.props.buttons[1][2]}/>
          <BoardButton value={this.props.buttons[1][3]}/>
        </div>
        <div>
          <BoardButton value={this.props.buttons[2][0]}/>
          <BoardButton value={this.props.buttons[2][1]}/>
          <BoardButton value={this.props.buttons[2][2]}/>
          <BoardButton value={this.props.buttons[2][3]}/>
        </div>
        <div>
          <BoardButton value={this.props.buttons[3][0]}/>
          <BoardButton value={this.props.buttons[3][1]}/>
          <BoardButton value={this.props.buttons[3][2]}/>
          <BoardButton value={this.props.buttons[3][3]}/>
        </div>
      </div>
    );
  }
}

export default MidBoard;
