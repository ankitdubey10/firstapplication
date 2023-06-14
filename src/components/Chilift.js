import React from "react";
import Chilift2 from "./Chilift2";
export default function Chilift(para)
{
    let name = "Ankit Dubey";
    let age = 23; 
    return(
    <div style={{backgroundColor:"yellowgreen"}}>
        <h2>I am child.</h2>
        <Chilift2 declare = {para.call}></Chilift2>
        <button onClick={ ()=>para.call(name)}>Name</button>
        <button onClick={ ()=> para.age(age) }>Age</button>
        
    </div>                                                                  
    )
}