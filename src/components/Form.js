import React, { useState } from "react";
function Form() {
    const [name,setName] = useState("");
    const [lastname, setLN] = useState("");
    const [age, setAge] = useState("");
    const [occ, setOcc] = useState("");
    const [tnc, setTnc] = useState(false);
    const [gender, setGen] = useState("Select gender");
    function getData(e) {
        console.log(name, lastname, age, occ, tnc);
        e.preventDefault();
    }
    var logged = false; 
    return(
        <div style={{backgroundColor:"yellow"}}>
            <h2>Form in react</h2>
            <form onSubmit={getData}>
                <input value={name} onChange={(e)=>setName(e.target.value)} style={{fontSize : "20px", width : "400px"}} type="text" placeholder="Enter first name"></input> <br/><br/>
                <input value={lastname} onChange={(e)=>setLN(e.target.value)}  style={{fontSize : "20px", width : "400px"}} type="text" placeholder="Enter last name"></input><br/><br/>
                <input value={age} onChange={(e)=>setAge(e.target.value)}  style={{fontSize : "20px", width : "400px"}} type="number" placeholder="Enter age"></input><br/><br/>
                <select style={{fontSize : "20px", width : "150px"}}> 
                <option value={gender} onChange={(e)=>setGen(e.target.value)}>Select gender</option>
                <option>Male</option> 
                <option>Female</option> 
                <option>Transgender</option> 
                </select>    <br/><br/>
                <input value={occ} onChange={(e)=>setOcc(e.target.value)}  style={{fontSize : "20px", width : "400px"}} type="text" placeholder="Enter occupation name"></input><br/><br/>
                <input value={tnc} onChange={(e)=>setTnc(e.target.checked)} type="checkbox" style={{width:"17px", height:"17px"}}/><span style={{fontSize : "20px", width : "400px"}}>Accept Terms and Conditions</span>
                <br/><br/>
                <button type="submit">Submit</button>
                <button onClick={()=>{
                    setAge("");
                    setLN("");
                    setName("");
                    setOcc("");
                    setTnc();
                    setGen(gender);
                }} type="clear">Clear</button>
            </form>
            {
                logged ? <h1>Logged In</h1> : <h2>Please Login</h2>
            }
        </div>
    )
}
export default Form;