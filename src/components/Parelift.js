import React from "react";
import Chilift from "./Chilift";
export default function Parelift()
{
    function pareToChild(data)
    {
        alert(data);
    }
    return(
        <div style={{backgroundColor:"yellow"}}>
            <h1>Sending Data From Child to Parent</h1>
            <Chilift call = {pareToChild} age = {pareToChild}></Chilift>
        </div>
    )
}