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


----------------------------------------------------------------------------------
UseState

array destrcuting from useState()

const [counter,setCounter] = useState(50);
counter - state
setCounter - modify
50 - initail or default value

import React, { useState } from 'react'

export default function UseStateHook() {

    const [increment,setIncrement] = useState(50);
    const [toggle,setToggle] = useState(false);

    const incrementMe = () =>{
        setIncrement((prevInc)=>prevInc+1)
    }

    const toggleMe = () =>{
        setToggle((prevToggle)=>!toggle)
    }
  return (
    <div>
        <p>useState</p>
        <p>Increment value {increment}</p>
        <button onClick={incrementMe}>Increment</button>
        <button onClick={toggleMe}>{toggle ? 'on' : 'off'}</button>
    </div>
  )


}
----------------------------------------------------------------------------------
useEffect

useEffect(
  ()=>{
    console.log('syntax')
  }
)

runs everytime the component renders (not only first time)

should be inside the component hence it will come under the component scope.

case 1 : useEffect should run only once

useEffect(
  ()=>{
    console.log('syntax')
  },[])

sln : Passing dependency array

Case 2 : Run useEffect when particular state changes

useEffect(
  ()=>{
    console.log('syntax')
  },[increment])

case 3 : component unmount clean up activity

later

API call example
----------------

npm install axios

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useEffectHook() {
  const [loading, setLoading] = useState(false);
  const [todosdata, setTodosData] = useState([]);

  // Can be run only once
  useEffect(() => {
    async function getTodosData() {
      setLoading(true);
      const responsedata = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setLoading(false);
      setTodosData(responsedata.data);
    }
    getTodosData();
  }, []);

  return (
    <div>
      <p>Functional Component - API Call</p>
      {loading?(<p>Loading</p>):(
          <ol>
              {todosdata.map((todoitem,i)=>{
                  return <li key={i}>{todoitem.title}-({todoitem.completed?"Done":"WIP"})</li>
              })}
          </ol>
      )}
    </div>
  );
}

----------------------------------------------------------------------------------


































