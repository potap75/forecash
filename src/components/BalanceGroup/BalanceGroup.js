import React from "react";
import BalanceAttributeNames from './BalanceAttributeNames/BalanceAttributeNames';
import BalanceRevenueLine from './BalanceRevenueLine/BalanceRevenueLine';
import BalanceScheduledLine from './BalanceScheduledLine/BalanceScheduledLine';
import BalanceBillsLine from './BalanceBillsLine/BalanceBillsLine';
import BalanceTotalLine from './BalanceTotalLine/BalanceTotalLine';
import './BalanceGroup.css';

const BalanceGroup = () => {
    return (
<div className="balance-group">
    <BalanceAttributeNames />
    <BalanceRevenueLine />
    <BalanceBillsLine />
    <BalanceScheduledLine />
    <BalanceTotalLine />
    
</div>
    )
}

export default BalanceGroup;
