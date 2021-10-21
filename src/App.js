import Header from "./components/Header/Header";
import TodayDate from "./components/BalanceGroup/TodayDate/TodayDate";
import TodayGroup from "./components/TodayGroup/TodayGroup";
import ForecastGraph from "./components/ForecastGraph/ForecastGraph";
import "./App.css";
import BalanceGroup from "./components/BalanceGroup/BalanceGroup";

function App() {
  const data = [
    {
      date: "today",
      currency: "$",
      dayCash: 10.0,
      balance: 
        {
          revenue: 150.0,
          bills: 60.0,
          scheduled: 40.0,
          balance: 50.0,
        },
      forecast: "GraphPlaceholder",
    }
  ];
  return (
    <div className="dashboard">
      <Header />
      <p className="today-label">You may spend today:</p>
      <TodayDate 
        todayDate={data[0].date} 
      />
      <TodayGroup
        todayCurrency={data[0].currency}
        todayCash={data[0].dayCash}
      />
      <table>
        <tr>
          <td>
            <BalanceGroup
              revenue={data[0].balance.revenue}
              scheduled={data[0].balance.scheduled}
              bills={data[0].balance.bills}
              balance={data[0].balance.balance}
            />
          </td>
          <td>
            <ForecastGraph forecastGraph={data.forecast} />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
