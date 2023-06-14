import React, { useEffect, useState } from "react";
import style from './custom.module.css'
function Useeffect(props)
{
    const [count, setCount] = useState(0);
    const [data, setData] = useState(10);
    function oddOrEven(count){
        if(count%2===0){
            console.warn("even")
        }
        else{
            console.warn("odd")
        }
    }
    useEffect(()=>{
        console.warn("useffect worked"); 
        oddOrEven(count);
    },[count]) 

    useEffect(()=>{
        // alert("data is "+data); 
    }, [data])

    useEffect(()=>{
        // alert("rank is "+props.rank);
    }, [props.rank])

    useEffect(()=>{
        console.warn("marks is "+props.marks);
    }, [props.marks])

    return(
        <div className={style.success}> 
            {console.warn("Under return part")}
            <h1>Useeffect</h1> <h2>Count is {count} Data is {data}</h2> 
            <button onClick={()=>setCount(count+1)}>Add 1 to Count</button>
            <button onClick={()=>setData(data+5)}>Add 5 to Data</button>
            <h1>Useeffect with props</h1> 
            <h2>Rank is {props.rank} Marks is {props.marks}</h2> 
        </div>   
    )
}
export default Useeffect;