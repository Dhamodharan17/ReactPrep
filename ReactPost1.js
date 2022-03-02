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

ES6
---
