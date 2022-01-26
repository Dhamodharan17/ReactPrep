import React from 'react';
import ReactDOM from 'react-dom';

function PersonInfo(props){
  // object destructing
  const {name,age} = props;
  return (
    <div>
      <h3>{name}</h3>
      <h3>{age}</h3>
    </div>
  )
}

let pDet=(
  <div>
  <PersonInfo name="Karthik" age="23"></PersonInfo>
  <PersonInfo name="Dhamo" age="23"></PersonInfo>
  </div>
)

ReactDOM.render(
  pDet,
  document.getElementById('root')
);
