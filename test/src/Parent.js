import React, { useState } from 'react';
import './App.css';
import boy from "./boy.svg"

export default function Parent() {
    const [count,setCount] = useState(0);

    const handelAdd = () =>{
      setCount(count + 1);
    }
    const handelRemove = () =>{
      if(count !== 0){
        setCount(count - 1);
      }
    }
  return (
    <>
    <div className='parent'>
        <h1 style={{color: 'red', margin: '80px'}}>COUNT : {count}</h1>
        <button className='cssButton' onClick={handelAdd}>+</button>
        <button className='cssButton' onClick={handelRemove}> - </button>
    </div>
    <div className="row">
    <img src={boy} alt="logo" height='400px' width='300px'/>
    </div>
    </>
  )
}
