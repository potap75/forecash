import React, { useState } from "react";
import "./Currency.css";

const Currency = (props) => {
    const [currency, setCurrency] = useState(props.currency);
    const clickHandler = (props) => {
            setCurrency("AED");
            console.log(currency);
        }

    return (
        <div>
        <p className="todayAmount">{currency}</p>
        <button onClick = {clickHandler}>Change Currency</button>
        </div>
    )
}

export default Currency;