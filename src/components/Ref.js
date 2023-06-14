import React, { createRef } from "react";
class Ref extends React.Component{
    constructor()
    {
        super();
        this.inputRef = createRef();
    }
    componentDidMount()
    {
        console.warn(this.inputRef.current.value)
    }
    getVal()
    {
        console.warn(this.inputRef.current.value);
        this.inputRef.current.style.color = "brown";
    }
    changeColor()
    {
        this.inputRef.current.style.backgroundColor = "blue";
    }
    render()
    {
        return(
            <div style={{backgroundColor:"greenyellow"}} >
                <h1>Ref In React</h1>
                <input type="text" ref={this.inputRef} />
                <button onClick={()=>this.getVal()}>Click</button>
                <button onClick={()=>this.changeColor()}>Color</button>
            </div>
        )
    }
}
export default Ref;