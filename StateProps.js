import React, { Component } from "react";

export default class StateProps extends Component {
  state = {
    increment: 50,
    isToggle: true,
  };

  // Functions belongs to the class

  incrementMe = () => {
    this.setState((prevState) => ({
      increment: prevState.increment + 1,
    }));
  };

  toggleMe = () => {
    this.setState((prevState) => ({
      isToggle: !prevState.isToggle,
    }));
  };

  // Render Function
  render() {
    return (
      <div>
        <p> {this.state.increment}</p>
        <button onClick={this.incrementMe}>Click to increment</button>
        <button onClick={this.toggleMe}>
          {this.state.isToggle ? "On" : "Off"}
        </button>
        <CounterDisplay countervalue={this.state.increment} />
      </div>
    );
  }
}

const CounterDisplay = (props) => {
  //Component should have return statement, so content will be displayed
  return (
    <div>
      <p>Counter Display Component</p>
      <p>{props.countervalue}</p>
    </div>
  );
};
