import React, {Component} from 'react';
class Stateclaa extends Component{
    constructor(){
        super();
        this.state = {
            name:"anil",
            age:19,
            occupation:"software engineer",

        }
    }
    Runme(){
        let a = prompt("Enter the name");
        this.setState({name:a});
        alert(`Name is going to ${a} ?`);
    }
    Runme1(){
        let a = prompt("Enter the age");
        this.setState({age:a});
        alert(`Name is going to ${a} ?`);
    }
    Runme2(){
        let a = prompt("Enter the occupation");
        this.setState({occupation:a});
        alert(`Name is going to ${a} ?`);
    }
    render() {
        return (
            <div className='App'>
                <h3>Name is {this.state.name}. Age is {this.state.age}. Occupation is {this.state.occupation}.</h3>
                <button onClick={this.Runme.bind(this)}>Update name</button> {/* never use this.Runme(), it will call infinite */}
                <button onClick={this.Runme1.bind(this)}>Update age</button> {/* never use this.Runme(), it will call infinite */}
                <button onClick={this.Runme2.bind(this)}>Update occu<super>n</super> </button> {/* never use this.Runme(), it will call infinite */}
            </div>
        )
    }
}
export default Stateclaa;