import React from "react";
import BalanceAttributeNamesAmount from './BalanceAttributeNames/BalanceAttributeNamesAmount';
import BalanceAttributeNamesItems from './BalanceAttributeNames/BalanceAttributeNamesItems';
import BalanceRevenueLineLabel from './BalanceRevenueLine/BalanceRevenueLineLabel';
import BalanceRevenueLineAmount from './BalanceRevenueLine/BalanceRevenueLineAmount';
import BalanceScheduledLineLabel from './BalanceScheduledLine/BalanceScheduledLineLabel';
import BalanceScheduledLineAmount from './BalanceScheduledLine/BalanceScheduledLineAmount';
import BalanceBillsLineAmount from './BalanceBillsLine/BalanceBillsLineAmount';
import BalanceBillsLineLabel from './BalanceBillsLine/BalanceBillsLineLabel';
import BalanceTotalLineLabel from './BalanceTotalLine/BalanceTotalLineLabel';
import BalanceTotalLineAmount from './BalanceTotalLine/BalanceTotalLineAmount';
import './BalanceGroup.css';

const BalanceGroup = (props) => {
    return (
<div className="balance-group">
    <table>
  <tr>
    <td><BalanceAttributeNamesAmount /></td>
    <td><BalanceAttributeNamesItems /></td>
  </tr>
  <tr>
    <td><BalanceRevenueLineLabel /></td>
    <td><BalanceRevenueLineAmount 
    amount = {props.revenue}
    /></td>
  </tr>
  <tr>
    <td><BalanceScheduledLineLabel /></td>
    <td><BalanceScheduledLineAmount
    amount = {props.scheduled}
    /></td>
  </tr>
  <tr>
    <td><BalanceBillsLineLabel /></td>
    <td><BalanceBillsLineAmount 
    amount = {props.bills}
    /></td>
  </tr>
  <tr>
    <td><BalanceTotalLineLabel /></td>
    <td><BalanceTotalLineAmount
    amount = {props.total}
    /></td>
  </tr>
</table>
</div>
    )
}

export default BalanceGroup;
