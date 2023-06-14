import { Fragment } from "react";
function Frag()
{
    const address = [
        {add: 1, house: 10, city:"Pune"},
        {add: 2, house: 30, city:"Mumbai"},
        {add: 3, house: 60, city:"Thane"}
    ]
    return(
        address.map( (data) =>
            <Fragment key={address.add}>
            <h3>House No {data.house}</h3>
            <h3>City name is {data.city}</h3>
            </Fragment>
        )
    )
}
export default Frag;