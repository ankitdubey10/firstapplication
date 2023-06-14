import './App.css';
import Form from './components/Form';
import FunctionProps from './components/FunctionProps';
import HideShow from './components/HideShow';
import Input from './components/Input';
import Navbar from './components/Navbar';
import NoJSX from './components/NoJSX';
import Stateclaa from './components/Stateclaa';
import Student from './components/Student';
import User from './components/User';
import { useState } from 'react';
import Class from './lifecycle/Class';
import Render from './components/Render';
import CompoDidMount from './components/CompoDidMount';
import Useeffect from './hooks/Useeffect';
import Arraylist from './components/Arraylist';
import Nested from './components/Nested';
import Cols from './components/Cols';
import Frag from './components/Frag';
import Parelift from './components/Parelift';
// import button from 'react-bootstrap'; 
import Pure from './components/Pure'
import Memo from './components/Memo';
import Ref from './components/Ref';
import Reffunction from './components/Reffunction';
import Uncontrol from './components/Uncontrol';
function App() {
  // let na = "Ankit Dubey"// vairable will not be able to change value
  const [na, setNa] = useState("Ankit Dubey");
  const [num, setNum] = useState(0);
  const [rank, setRank] = useState(1);
  const [marks, setMarks] = useState(100);
  function Checkingprops() {
    alert("Hello from Parent");
  }
  function Runme() {
    let a = prompt("Enter your full name");
    // na = a; this will not work. this is bad idea we must use state
    alert(`Name is going to ${a} ? `);
    setNa(a);
    
  }
  function he() { console.warn("I am second functions as props") }
  return (
    <div className='App'>
      <Navbar/>
      <center>
        <User/>
        <NoJSX/>
        <Student name="Ankit Dubey" age = "22" occupation = "stuednt" gender = "Male" />
        {/* <Student name="Amisha Dubey" age = "32" occupation = "enginer" gender = "Female" />
        <Student name="Ajit Dubey" age = "42" occupation = "businessman" gender = "Male" /> */}
        <h1>{na}</h1>
        <h2>{num}</h2>
        <button onClick={Runme}><h3>Change Name</h3></button> <br></br> 
        <button onClick={() => setNum(num+1)}><h3>Press Me</h3></button>
        <Stateclaa/>
        <Input/>
        <HideShow/>
        <Form/>
        <FunctionProps data = {Checkingprops} para = {he}></FunctionProps>
        <Class></Class>
        <Render/>
        <CompoDidMount/>
        <Useeffect rank = {rank} marks = {marks} ></Useeffect>
        <button onClick={()=>{setRank(rank+1)}}>Rank</button>
        <button onClick={()=>{setMarks(marks-1)}}>Marks</button>
        <Arraylist></Arraylist>
        <Nested/>
        <table>
          <tbody>
            <tr>
              <Cols/>
            </tr>
            <tr>
              <Cols/>
            </tr>
          </tbody>
        </table>
        <h1>For using key in react</h1>
        <Frag></Frag>
        <Parelift/> 
        <Pure></Pure>
        <Memo></Memo>
        <Ref></Ref>
        <Reffunction></Reffunction>
        <Uncontrol></Uncontrol>
      </center>        
    </div>
  );
}

export default App;
