import React, { Component } from "react";
class Render extends Component{
    constructor()
    {
        super();
        this.state={
            name:"ajit"
        }
        console.warn("Namste ",this.props);
    }
    render() 
    {
        console.warn("Render is Here.")
        return(
            
            <div style={{backgroundColor:"yellow"}}>
                <h1>Render Lifecycle</h1>
                <h2> Hello {this.state.name}</h2>
                <button onClick={()=>{this.setState({name:"Ankit"})}}>Click Me</button>
            </div>
        )
    }
}
export default Render; 