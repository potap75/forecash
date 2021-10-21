import React from "react";
import "./TodayGroup.css";

const TodayGroup = (props) => {
  return (
    <div className="today-group" >
      <p className="today-date" >{props.todayDate}</p>
      <p className="today-currency">$</p>
      <p className="today-amount" >{props.todayCash}</p>
    </div>
  );
};

export default TodayGroup;