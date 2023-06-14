import React, { useState } from "react";
function HideShow() {
    const [status, setStatus] = useState(true);
    return(
        <div style={{backgroundColor : "violet"}}>
            {status ? <h2>Hide and Show</h2> : null}
            {/* <button onClick={()=>setStatus(true)}>Show</button>
            <button onClick={()=>setStatus(false)}> Hide</button> */}
            <button style={{backgroundColor : "lightblue"}} onClick={()=>{ 
                // status ? setStatus(false) : setStatus(true)
                setStatus(!status)
            }}>Toggle</button>
        </div>
    )
}
export default HideShow;