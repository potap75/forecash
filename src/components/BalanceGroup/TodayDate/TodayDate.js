import React from "react";
import "./TodayDate.css"

const TodayDate = (props) => {
    return (
        <div>
        <p className="today-label">{props.todayDate}</p>
        </div>
    )
}

export default TodayDate;