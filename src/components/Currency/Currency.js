import React from "react";
import "./Currency.css";

const Currency = (props) => {
    return (
        <div>
        <p className="today-currency">{props.currency}</p>
        </div>
    )
}

export default Currency;