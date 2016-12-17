import React, { Component } from 'react';

class MoveButton extends Component {
  render() {
    return (
      <button className="Move-button">{this.props.value}</button>
    );
  }
}

export default MoveButton;
