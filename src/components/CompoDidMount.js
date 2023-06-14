import React, { Component } from "react";
class CompoDidMount extends Component{
    constructor()
    {
        super(); 
        console.warn("constructro called");
        this.state={
            count:0
        }
    }
    componentDidMount()
    {
        console.warn("Conpmpodidmount");
        return true;
    }
    componentDidUpdate(preProps, preState, snapshot)
    {
        console.warn("componentDidUpdate", preState.count);
        console.warn("componentDidUpdate", snapshot);
        console.warn("componentDidUpdate", preProps);
        // this.setState({count:this.state.count+1}); this will give error as it will go for infinite 
        // because when we go for state update the componentDidUpdate functions is called 
        // this creates a recursive call 
        // if you want to run then give condition
        // if(this.state.count<10){
        //     this.setState({count:this.state.count+1})
        // }
    }
    shouldComponentUpdate()
    {
        console.warn("shouldComponentUpdate", this.state.count); // you can see actual(before update) state value in console
        if(this.state.count > 10){
            return false; 
        }
        else{
            return true;
        }
        // return true; // this will alllow for the re rendering of react component
        // return false  // this will block re rendering of component
    }
    render()                                                                                                                
    {
        console.warn("render called");
        return(
            <div style={{backgroundColor:"Black", color:"white" }}>
            <h2>Lifecycle Methods</h2>
            <h3>Count is {this.state.count}</h3>
            <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update</button>
            </div>
        )
    }
}
export default CompoDidMount; 