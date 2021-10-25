import React from "react";
import "./Date.css"

const Date = (props) => {
    return (
        <div>
        <p className="today">Today is {props.date}. </p>
        </div>
    )
}

export default Date;