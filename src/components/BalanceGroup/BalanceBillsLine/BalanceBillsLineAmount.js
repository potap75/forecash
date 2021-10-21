import React from "react";
import "./BalanceBillsLine.css";

const BalanceBillsLineAmount = (props) => {
    return (
        <div>
        <p className="bills-amount">{props.amount}</p>
    </div>
    )
}

export default BalanceBillsLineAmount;