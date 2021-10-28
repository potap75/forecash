import React, { useState } from "react";
import AttributeName from "./Attribute/AttributeName";
import AttributeAmount from "./Attribute/AttributeAmount";
import RevenueLabel from "./Revenue/RevenueLabel";
import RevenueAmount from "./Revenue/RevenueAmount";
import BillsLabel from "./Bills/BillsLabel";
import BillsAmount from "./Bills/BillsAmount";
import ScheduledLabel from "./Scheduled/ScheduledLabel";
import ScheduledAmount from "./Scheduled/ScheduledAmount";
import TotalLabel from "./Total/TotalLabel";
import TotalAmount from "./Total/TotalAmount";
import "./BalanceGroup.css";

const BalanceGroup = (props) => {

  const[revenue, setRevenue] = useState(props.balanceData.revenue);
  const clickHandlerRevenue = (props) => {
    setRevenue("200");
    console.log("revenue");
  }

  const[bills, setBills] = useState(props.balanceData.bills);
  const clickHandlerBills = (props) => {
    setBills("80");
    console.log("bills");
  }

  const[scheduled, setScheduled] = useState(props.balanceData.scheduled);
  const clickHandlerScheduled = (props) => {
    setScheduled("60");
    console.log("scheduled");
  }

  const[total, setTotal] = useState(props.balanceData.total);
  const clickHandlerTotal = (props) => {
    setTotal("80");
    console.log("total");
  }

  return (
    <div className="balance-group">
      <table>
        <tr>
          <td>
            <AttributeName />
          </td>
          <td>
            <AttributeAmount />
          </td>
          <td>
            <h2 >Change Amount</h2>
            </td>
          </tr>
          <tr>
          <td>
            <RevenueLabel />
          </td>
          <td>
            <RevenueAmount 
            revenue = {revenue}
            />
          </td>
          <td>
            <button onClick={clickHandlerRevenue}>Change Revenue</button>
            </td>
          </tr>
          <tr>
          <td>
            <BillsLabel />
          </td>
          <td>
            <BillsAmount 
            bills = {bills}
            />
          </td>
          <td>
            <button onClick={clickHandlerBills}>Change Bills</button>
            </td>
          </tr>
          <tr>
          <td>
            <ScheduledLabel />
          </td>
          <td>
            <ScheduledAmount 
            scheduled = {scheduled}
            />
          </td>
          <td>
            <button onClick={clickHandlerScheduled}>Change Scheduled</button>
            </td>
          </tr>
          <tr>
          <td>
            <TotalLabel />
          </td>
          <td>
            <TotalAmount 
            total = {total}
            />
          </td>
          <td>
            <button onClick={clickHandlerTotal}>Change Total</button>
            </td>
        </tr>
      </table>
    </div>
  );
};

export default BalanceGroup;
