import React from "react";
import "./BalanceRevenueLine.css";

const BalanceRevenueLineAmount = (props) => {
  return (
    <div>
      <p className="revenue-amount">{props.amount}</p>
    </div>
  );
};

export default BalanceRevenueLineAmount;
