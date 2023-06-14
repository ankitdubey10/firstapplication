import React, {useState} from 'react';
function Student(props) {
    console.warn(props);
    const [name, setName] = useState(props.name);
    const [age, setAge] = useState(props.age);
    const [gender, setGender] = useState(props.gender);
    function changing() {
        let a = prompt("eneter the name");
        alert(`Name is going to change to ${a}`);
        setName(a);
    }
    function changingAge() {
        let a = prompt("eneter the age");
        if(a>0 && a<150){
            alert(`Age is going to change to ${a}`);
            setAge(a);
        }
        else{
            alert(`Invalid Age`);
        }
    }
    function changingGender() {
        let a = prompt("eneter the gender");
        alert(`Gender is going to change to ${a}`);
        setGender(a);
    }
    return(
        <div style={{backgroundColor:"skyblue"}}>
            <h2>Functional components props</h2>
            <h2>Welcome Mr. {name}</h2>
            <h2>Age is {age}</h2>
            <h2>Gender is {gender}</h2>
            <button onClick={changing} style={{borderRadius:"30%", backgroundColor:"lightgrey", width:"100px", height:"50px" }}>Change Name</button>
            <button onClick={changingAge} style={{borderRadius:"30%", backgroundColor:"lightgrey", width:"100px", height:"50px" }}>Change Age</button>
            <button onClick={changingGender} style={{borderRadius:"30%", backgroundColor:"lightgrey", width:"100px", height:"50px" }}>Change Gender</button>
        </div>
    )
}
export default Student;