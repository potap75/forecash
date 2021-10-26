import React from "react";
import Header from "./components/Header/Header";
import TodayGroup from "./components/TodayGroup/TodayGroup";
import BalanceGroup from "./components/BalanceGroup/BalanceGroup";
import Graph from "./components/Graph/Graph";

function App() {
  const data = [
    {
      today: 
      {
        date: "10/31/2021",
        currency: "$",
        cash: 10.00,
      },
      balance: {
        revenue: 150.00,
        bills: 60.00,
        scheduled: 40.00,
        total: 50.00,
        forecast: "GraphPlaceholder",
      },
    },
  ];
  return (
    <div>
      <Header />
      <TodayGroup
      todayData = {data[0].today}
      />
      <BalanceGroup
      balanceData = {data[0].balance}
      />
      <Graph 
      graphData = {data[0].forecast}/>
    </div>
  );
}

export default App;
