function Navbar() {
    function App() {
      return (      
        <div className="App" style={{fontSize:"25px"}}>
            I am nested one.
        </div>
      )
}
    return(
        <div className = "navbar">
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>Docs</li>
                <li style={{float:"right"}}>About Us</li>
            </ul>
            <App/>
            <App/>
            <App/>
        </div>
    );
}
export default Navbar;