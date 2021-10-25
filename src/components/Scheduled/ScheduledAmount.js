import React from "react";
import './Scheduled.css'

const ScheduledAmount = (props) =>{
    return (
        <div>
        <p className="scheduled-amount">{props.amount}</p>
    </div>
    )
}

export default ScheduledAmount;