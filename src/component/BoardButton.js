import React, { Component } from 'react';

class BoardButton extends Component {
  render() {
    return (
      <button className="Board-button">{this.props.value}</button>
    );
  }
}

export default BoardButton;
