import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function PersonInfo(props){
  return (
    <div>
      <h3>{props.name}</h3>
    </div>
  )
}

let pDet=(
  <div>
  <PersonInfo name="Karthik"></PersonInfo>
  <PersonInfo name="Dhamo"></PersonInfo>
  </div>
)

ReactDOM.render(
  pDet,
  document.getElementById('root')
);
