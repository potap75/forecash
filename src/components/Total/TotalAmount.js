import React from "react";
import "./Total.css";

const TotalAmount = (props) => {
  return (
    <div>
      <p className="total-amount">{props.amount}</p>
    </div>
  );
};

export default TotalAmount;
