import React from "react";
import "./Bills.css";

const BillsAmount = (props) => {
  return (
    <div>
      <p className="bills-amount">{props.amount}</p>
    </div>
  );
};

export default BillsAmount;
