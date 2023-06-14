import React, {useRef} from 'react';
function Reffunction()
{
    let ref = useRef(0);
    function clicked() {
        ref.current = ref.current + 1;
        alert('You clicked and change is to' +ref.current);
    }
    let inp = useRef(null);
    function handleinput() {
        
        inp.current.value = prompt();
        inp.current.focus();
        inp.current.style.color = "blue"
    }
    return(
        <div style={{backgroundColor:"skyblue"}}>
            <h1>Ref in Functional Component</h1>
            <button onClick={()=>clicked()}>Alert+</button>
            <input type='text' ref={inp} />
            <button onClick={handleinput}>Input</button> 
        </div>
    )
}
export default Reffunction;