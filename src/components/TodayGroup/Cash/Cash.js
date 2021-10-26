import React from "react";
import "./Cash.css"

const Cash = (props) => {
    return (
        <div>
        <p className="todayAmount">{props.cash}</p>
        </div>
    )
}

export default Cash;