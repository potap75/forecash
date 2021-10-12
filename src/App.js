import Header from "./components/Header/Header";
import TodayGroup from "./components/TodayGroup/TodayGroup";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <p className="today-label" >You may spend today:</p>
      <TodayGroup />
      <div className="BalanceGroup" style={{padding: 5, boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20, borderStyle: 'solid', borderWidth: 2, borderStyle: 'solid', borderColor: 'rgba(119, 119, 119, 1)', display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start',}}>
    <div className="BalanceAttributeNames" style={{width: 568, height: 45, display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end',}}>
        <p className="ItemsColumn" style={{width: 230, height: 45, fontSize: 36, fontWeight: '700', lineHeight: '100%', color: 'black',}}>Items</p>
        <div style={{width: 41,}}/>
        <p className="Amount" style={{width: 297, height: 45, fontSize: 36, fontWeight: '700', lineHeight: '100%', textAlign: 'right', color: 'black',}}>Amount</p>
    </div>
    <div className="BalanceRevenueLine" style={{width: 563, height: 45, display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end',}}>
        <p className="Revenue" style={{width: 230, height: 45, fontSize: 36, fontStyle: 'italic', lineHeight: '100%', color: 'black',}}>Revenue</p>
        <div style={{width: 36,}}/>
        <p className="RevenueAmount" style={{width: 297, height: 45, fontSize: 36, fontStyle: 'italic', lineHeight: '100%', textAlign: 'right', color: 'black',}}>0.00</p>
    </div>
    <div className="BalanceBillsLine" style={{width: 563, height: 45, display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end',}}>
        <p className="Bills" style={{width: 230, height: 45, fontSize: 36, fontStyle: 'italic', lineHeight: '100%', color: 'black',}}>Bills</p>
        <div style={{width: 36,}}/>
        <p className="BillsAmount" style={{width: 297, height: 45, fontSize: 36, fontStyle: 'italic', lineHeight: '100%', textAlign: 'right', color: 'black',}}>0.00</p>
    </div>
    <div className="BalanceScheduledLine" style={{width: 563, height: 45, display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end',}}>
        <p className="Scheduled" style={{width: 230, height: 45, fontSize: 36, fontStyle: 'italic', lineHeight: '100%', color: 'black',}}>Scheduled</p>
        <div style={{width: 36,}}/>
        <p className="ScheduledAmount" style={{width: 297, height: 45, fontSize: 36, fontStyle: 'italic', lineHeight: '100%', textAlign: 'right', color: 'black',}}>0.00</p>
    </div>
    <div className="BalanceTotalLine" style={{width: 568, height: 45, display: 'inline-flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end',}}>
        <p className="Balance" style={{width: 230, height: 45, fontSize: 36, fontStyle: 'italic', lineHeight: '100%', color: 'black',}}>Balance</p>
        <div style={{width: 41,}}/>
        <p className="BalanceAmount" style={{width: 297, height: 45, fontSize: 36, fontStyle: 'italic', lineHeight: '100%', textAlign: 'right', color: 'black',}}>0.00</p>
    </div>
</div>
    </div>
  );
}

export default App;
