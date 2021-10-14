import Header from "./components/Header/Header";
import TodayGroup from "./components/TodayGroup/TodayGroup";
import ForecastGraph from "./components/ForecastGraph/ForecastGraph";
import "./App.css";
import BalanceGroup from "./components/BalanceGroup/BalanceGroup";

function App() {
  return (
    <div className="dashboard">
      <Header />
      <p className="today-label">You may spend today:</p>
      <TodayGroup />
      <table>
        <tr>
          <td>
            <BalanceGroup />
          </td>
          <td>
            <ForecastGraph />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
