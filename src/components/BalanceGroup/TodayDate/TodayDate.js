import React from "react";
import "./TodayDate.css"

const TodayDate = (props) => {
    return (
        <div>
        <p className="today">{props.todayDate}</p>
        </div>
    )
}

export default TodayDate;