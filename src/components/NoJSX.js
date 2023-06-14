import React from 'react'
function NoJSX() {
    return(
        React.createElement(
            'div', null, 
            React.createElement('h1', null, "React Without JSX")
            
        )
        /* Above can be simply implemented by writing below code
        <div>
            <h1>React Without JSX</h1>
        </div> */
     )
}
export default NoJSX;