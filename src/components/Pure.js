import React, { Fragment } from "react"
// class Pure extends React.Component{ //this was normal componenet
// here go with Pure by PureComponent
class Pure extends React.PureComponent{
    constructor()
    {
        super();
        this.state = {
            num : 1
        }
    }
    render()
    {
        // alert("render is happende");
        return(
            <Fragment>
            <h1>Pure Component</h1>
            <h2>Num is {this.state.num}</h2>
            <button onClick={ () => this.setState({num:this.state.num+2})}>Press to add 2</button>
            <button onClick={ () => this.setState({num:this.state.num})}>Press to add 0</button>
            </Fragment>
        )
    }
}
export default Pure;