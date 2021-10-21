import React from "react";
import './BalanceScheduledLine.css'

const BalanceScheduledLineAmount = (props) =>{
    return (
        <div className="balance-scheduled-line">
        <p className="scheduled-amount">{props.amount}</p>
    </div>
    )
}

export default BalanceScheduledLineAmount;