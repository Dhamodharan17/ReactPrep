import React, { useState } from 'react';

function App() {
const [increment,setIncrement] = useState(50);
const [toggle,setToggle] = useState(false);

const incrementMe = ()=>{
    setIncrement((preval)=>preval+1)
}

const toggleMe = () =>{
    setToggle((preval)=>!preval)
}
  return <div>
      
      <p>{increment}</p>
      <button onClick={incrementMe}>increments</button>
      <button onClick={toggleMe}>{toggle?"on":"off"}</button>
      </div>;
}

export default App;
