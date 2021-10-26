import React from "react";
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
          </tr>
          <tr>
          <td>
            <RevenueLabel />
          </td>
          <td>
            <RevenueAmount 
            revenue = {props.balanceData.revenue}
            />
          </td>
          </tr>
          <tr>
          <td>
            <BillsLabel />
          </td>
          <td>
            <BillsAmount 
            bills = {props.balanceData.bills}
            />
          </td>
          </tr>
          <tr>
          <td>
            <ScheduledLabel />
          </td>
          <td>
            <ScheduledAmount 
            scheduled = {props.balanceData.scheduled}
            />
          </td>
          </tr>
          <tr>
          <td>
            <TotalLabel />
          </td>
          <td>
            <TotalAmount 
            total = {props.balanceData.total}
            />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default BalanceGroup;
