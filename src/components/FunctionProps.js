import React from "react";
function FunctionProps(props)
{
    return(
        <div style={{backgroundColor:"green", color:"white"}}>
            <h1>Fucntion as Props Component</h1>
            <button onClick={()=>props.data()} >Click Me</button>
            <button onClick={()=>props.para()} >Click Me</button>
        </div>
    )
}
export default FunctionProps;