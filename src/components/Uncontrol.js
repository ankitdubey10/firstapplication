import React, { useRef } from "react";
function Uncontrol()
{
    let inputref1 = useRef(null);
    let inputref3 = useRef(null);
    let inputref2 = useRef(null);
    function Submitted(e)
    {
        e.preventDefault();
        console.log("Input is "+inputref1.current.value)
        console.log("Input is "+inputref2.current.value)
        console.log("Input is "+inputref3.current.value)
    }
    return(
        <div>
            <h1>Uncontrolled Component</h1>
            <form onSubmit={Submitted}>
            <input ref={inputref1} type="text" /> <br></br> <br></br>
            <input ref={inputref2} type="text" /> <br></br> <br></br>
            <input ref={inputref3} type="text" /> <br></br> <br></br>
            <button>Submit</button>
            </form>
        </div>
    )
}
export default Uncontrol; 