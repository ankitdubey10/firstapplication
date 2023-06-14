import React, { Component } from "react";
class Class extends Component{
    constructor()
    {
        super();
        console.warn("Constructor Called")
        this.state = {
            data:"Amit"
        }
    }
    render()
    {
        console.warn("Render Called")
        return(
            <div style={{backgroundColor:'red'}}>
            <h1>Lifecycle Methods in Class Component</h1>
            <h2>Hi {this.state.data}</h2>
            </div>
        )
    }
}
export default Class;