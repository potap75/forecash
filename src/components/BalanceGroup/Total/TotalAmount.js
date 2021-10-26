import React from "react";
import "./Total.css";

const TotalAmount = (props) => {
  return (
    <div>
      <p className="total-amount">{props.total}</p>
    </div>
  );
};

export default TotalAmount;
