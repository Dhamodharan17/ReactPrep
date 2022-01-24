import React, { Component } from 'react';

export default class App extends Component {

state = {
  increment : 50,
  isToggle : true
}

incrementMe = ()=>{
  // this.setState();
  this.setState( prevstate => ({ increment:prevstate.increment+1 }));
}

toggleMe = ()=>{
   // this.setState();
  this.setState( prevstate=>({ isToggle:!prevstate.isToggle }));
}
  render() {
    return (<div>
      <p>{this.state.increment}</p>
      <button onClick={this.incrementMe}>Click to increment</button>
      <button onClick={this.toggleMe}>{this.state.isToggle?'On':'Off'}</button>
      <Counter val={this.state.increment}></Counter>
    </div>);
  }
}

const Counter = props =>(
  <div>
    <p>{props.val}</p>
  </div>
)
