import React, { useState } from "react";
import "./Cash.css"

const Cash = (props) => {
    const[cash, setCash] = useState(props.cash);

    const clickHandler=(props) =>{
        setCash("20");
        console.log("cash");
    }
    
    return (
        <div>
        <p className="todayAmount">{cash}</p>
        <button onClick={clickHandler}>Change Cash</button>
        </div>
    )
}

export default Cash;