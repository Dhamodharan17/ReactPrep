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


ES6
---
