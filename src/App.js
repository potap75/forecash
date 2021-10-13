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
      <BalanceGroup />
      <ForecastGraph />
    </div>
  );
}

export default App;
