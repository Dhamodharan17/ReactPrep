Introduction to JSX
-------------------
case 1 :

import React from 'react';
import ReactDOM from 'react-dom';

const Name =  <span>Karthik</span>

const App = <div>Hi {Name}</div>

ReactDOM.render(App,document.getElementById('root'));

case 2 :

import React from 'react';
import ReactDOM from 'react-dom';

const printName = (name) =>{
  return <span>{name}</span>
}

const App = <div>Hi {printName("Dhamodharan")}</div>
ReactDOM.render(App,document.getElementById('root'))

case 3 :

import React from "react";
import ReactDOM from "react-dom";

const validateAge = (age) => {
  if (age >= 18) {
    return <span>License Approved</span>;
  } else {
    return <span>License Rejected</span>;
  }
};

const App = <div>{validateAge(18)}</div>;

ReactDOM.render(App, document.getElementById("root"));

conditional rendering
---------------------
  
  1. using ternary operator
  
import React, { Component } from 'react'
export default class App extends Component {

  state = {
    isDisplay: false
  }

  handleChange = () =>{
    this.setState({isDisplay:!this.state.isDisplay})
  }
  render() {
    return (
      <div>
       {this.state.isDisplay?<p>Condtion1</p>:<p>Condtion2</p>}
       <button onClick={this.handleChange}>Click to Change</button>
      </div>
    )
  }
}

2. using logical and operator

import React, { Component } from 'react'
export default class App extends Component {

  state = {
    isDisplay: false
  }

  handleChange = () =>{
    this.setState({isDisplay:!this.state.isDisplay})
  }
  render() {
    return (
      <div>
      {this.state.isDisplay&&<p>Displayed</p>}
       <button onClick={this.handleChange}>Click to Change</button>
      </div>
    )
  }
}

3.using if else
  import React, { Component } from 'react'
export default class App extends Component {

  state = {
    count: 0
  }

  handleChange = () =>{
    this.setState({count:this.state.count+1})
  }

  render() {
    let conditional_element = null;
    if(this.state.count % 5 == 0){
      conditional_element = <p>You got offer</p>
    }else{
      conditional_element = <p>wait got offer</p>
    }
    return (
      <div>
        Count : {this.state.count}
      {conditional_element}
       <button onClick={this.handleChange}>Click to Change</button>
      </div>
    )
  }
}


  
