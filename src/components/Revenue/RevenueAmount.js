import React from "react";
import "./Revenue.css";

const RevenueAmount = (props) => {
  return (
    <div>
      <p className="revenue-amount">{props.amount}</p>
    </div>
  );
};

export default RevenueAmount;
