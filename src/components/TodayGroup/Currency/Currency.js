import React from "react";
import "./Currency.css";

const Currency = (props) => {
    return (
        <div>
        <p className="todayAmount">{props.currency}</p>
        </div>
    )
}

export default Currency;