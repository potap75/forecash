import React from "react";
import "./BalanceTotalLine.css";

const BalanceTotalLineAmount = (props) => {
  return (
    <div>
      <p className="total-amount">{props.amount}</p>
    </div>
  );
};

export default BalanceTotalLineAmount;
