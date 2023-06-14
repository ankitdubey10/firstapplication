import { useState } from "react";
import React  from "react";
function Input() {
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);
    function getData(val){
        console.log(val.target.value);
        setData(val.target.value);      
        setPrint(false);
    }
    return(
        <div style={{backgroundColor:"blue", margin:"5px", padding:"5px"}}>
            <h2>{data}</h2>
            {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onChange={getData}/><label for="vehicle1"> I have a bike</label> */}
            <input style={{fontSize : "20px", width : "400px"}} type="text" placeholder="Enter some text" onChange={getData}></input>
            <button style={{height:"40px", width:"100px", borderRadius:"15%"}} onClick={()=>setPrint(true)}>Print Name </button>
            {
                print ? <h2>Printed value is : {data}</h2> : null                            
            }
        </div>
    )
}
export default Input;