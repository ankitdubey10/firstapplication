import React, { useMemo } from 'react'
import { useState } from 'react';
function Memo()
{
    const [count, setCount] = useState(0);
    const [marks, setMarks] = useState(100);
    const marksIncrement = useMemo(function counting(){
            console.warn("counting called");
            return count+100; 
        },[count])
    return (
    <div style={{ backgroundColor:"darkblue", color:"white" }} >
        <h1>Memo Use</h1>
        <h2> Count is {count} Marks is {marks} </h2>
        <h2> {marksIncrement}  </h2>
        <button onClick={()=>{setCount(count+1)}} >Count+</button>
        <button onClick={()=>{setMarks(marks*10)}} >Marks+</button>
        
    </div>
    )
}
export default Memo;