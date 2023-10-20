import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [shape, setShape]= useState("square");
  const [shapeArr, setShapeArr]= useState([]);
  function addShapes(e){
    let updatedArr=[...shapeArr];
    updatedArr=[...updatedArr, shape];
    setShapeArr(updatedArr);
  }
  function changeShape(e){
    console.log(e.target.value);
    setShape(e.target.value);
  }
  return (
    <div id="main">
      <div id="shape-creator">
        <select onChange={changeShape}>
          <option value="square" >Square</option>
          <option value="circle" >Circle</option>
        </select>
        <button onClick={addShapes}>Add</button>
      </div>
      <div id="shapes-holder">
        {Array.isArray(shapeArr) && shapeArr?.map((val,index)=>{
          return <div className={val}>{index}</div>
        })}
      </div>
    </div>
  )
}


export default App;
