State and Props in class components

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

----------------------------------------------------------------------------------

Styled Components

npm install styled-components

import React, { Component } from "react";
import stlyed from "styled-components";

const BlankCard = stlyed.div`
display:flex;
justify-content:center;
border-radius:6px;
width:400px
`;

// Will be receiving props
const ColoredCard = stlyed(BlankCard)`
background:${(props) => (props.countervalue > 50 ? "red" : "yellow")};
`;

export default class StyledComponent extends Component {
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
  // Decision on Colored components or black components
  const DynamicCard = props.countervalue > 0 ? ColoredCard : BlankCard;

  //Component should have return statement, so content will be displayed
  return (
    <div>
      {/* Passing props to styled components */}
      <DynamicCard countervalue={props.countervalue}>
        <p>{props.countervalue}</p>
      </DynamicCard>
    </div>
  );
};


