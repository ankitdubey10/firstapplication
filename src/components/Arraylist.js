import React from "react";
function Arraylist()
{
    const students = ['Jit','Smit','Raj','Jay'];
    const rollno = [1,2,3,4]; 
    let count = -1; 
    return(
        <div style={{backgroundColor:"darkblue"}}>
            <h1>Array List</h1>
            {
            students.map( (data)=>
            <div>
                <h1>Name of Student is {data}</h1>
            </div>
            )}
        </div>
    )
}
export default Arraylist;