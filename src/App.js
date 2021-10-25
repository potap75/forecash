import Header from "./components/Header/Header";
import Date from "./components/Date/Date";
import Currency from "./components/Currency/Currency";
import Cash from "./components/Cash/Cash";
import AttributeName from "./components/Attribute/AttributeName"
import AttributeAmount from "./components/Attribute/AttributeAmount"
import RevenueLabel from "./components/Revenue/RevenueLabel";
import RevenueAmount from "./components/Revenue/RevenueAmount";
import BillsLabel from "./components/Bills/BillsLabel";
import BillsAmount from "./components/Bills/BillsAmount";
import ScheduledLabel from "./components/Scheduled/ScheduledLabel";
import ScheduledAmount from "./components/Scheduled/ScheduledAmount";
import TotalLabel from "./components/Total/TotalLabel";
import TotalAmount from "./components/Total/TotalAmount"
import Graph from "./components/Graph/Graph";



function App() {
  const data = [
     {
        date: "10/31/2021",
        currency: "$",
        cash: 10.0,
        revenue: 150.0,
        bills: 60.0,
        scheduled: 40.0,
        total: 50.0,
        forecast: "GraphPlaceholder"
    },
  ];
  return (
    <div className="dashboard">
      <Header  />
      <Date date = {data[0].date}/>
      <Currency />
      <Cash />
      <AttributeName />
      <AttributeAmount />
      <RevenueLabel />
      <RevenueAmount />
      <BillsLabel />
      <BillsAmount />
      <ScheduledLabel />
      <ScheduledAmount />
      <TotalLabel />
      <TotalAmount />
      <Graph />
      
    </div>
  );
}

export default App;
