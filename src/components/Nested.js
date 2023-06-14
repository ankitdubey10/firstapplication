import React from "react";
import { Table } from "react-bootstrap";
import Reuse from "./Reuse"
// import 'bootstrap/dist/css/bootstrap.min.css';  
function Nested() {
    const users = [
        { name: "Ankit", lastname: "Dubey", age: 24, contact: 9546034456, gender:'male', address : [
            {add: 1, house: 10, city:"Pune"},
            {add: 2, house: 30, city:"Mumbai"},
            {add: 3, house: 60, city:"Thane"}
        ]},
        { name: "Amit", lastname: "Sagar", age: 34, contact: 9546034456, gender:'male', address : [
            {add: 1, house: 10, city:"Pune"},
            {add: 2, house: 30, city:"Mumbai"},
            {add: 3, house: 60, city:"Thane"}
        ]},
        { name: "Ravi", lastname: "Prasad", age: 24, contact: 9546034456,gender:'male', address : [
            {add: 1, house: 10, city:"Pune"},
            {add: 2, house: 30, city:"Mumbai"},
            {add: 3, house: 60, city:"Thane"}
        ]},
        { name: "Sky", lastname: "Little", age: 64, contact: 9546034456,gender:'male' , address : [
            {add: 1, house: 10, city:"Pune"},
            {add: 2, house: 30, city:"Mumbai"},
            {add: 3, house: 60, city:"Thane"}
        ]},
        { name: "Jaya", lastname: "Ragahava", age: 28, contact: 9546034456,gender:'female' , address : [
            {add: 1, house: 10, city:"Pune"},
            {add: 2, house: 30, city:"Mumbai"},
            {add: 3, house: 60, city:"Thane"}
        ]}
    ]
    return (
        <div style={{ backgroundColor: "lightgreen" }} >
            <h1>This is the list of Users</h1>
            <table border="2px solid red" width="70%"  >
                <tbody>
                    <tr style={{ textAlign:"center" }}>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Age</td>
                        <td>Contact</td>
                        <td>Gender</td>
                        <td>Address</td>
                    </tr>
                    {users.map((data, I) =>
                        data.gender === 'male'?
                        <tr key={I}>
                            <td>{data.name}</td>
                            <td>{data.lastname}</td>
                            <td>{data.age}</td>
                            <td>{data.contact}</td>
                            <td>{data.gender}</td>
                            <td>
                                <Table border='2' >
                                    <tbody>
                                        <tr>
                                            <td>Address No.</td>
                                            <td>House No.</td>
                                            <td>City </td>
                                        </tr>
                                        {

                                        data.address.map((addre, ide)=>
                                            <tr key={ide}>
                                                <td>{addre.add}</td>
                                                <td>{addre.house}</td>
                                                <td>{addre.city}</td>
                                            </tr>
                                        )
                                        }
                                    </tbody>
                                </Table>
                            </td>
                        </tr>
                        :null
                    )
                    }
                </tbody>
            </table>
            <h1>Reuse Component in ReactJS</h1>
            {
                users.map((item, i) => 
                <Reuse sentData = {item}/>
                ) 
            }
        </div>
    )
}
export default Nested;