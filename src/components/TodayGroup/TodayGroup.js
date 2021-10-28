import "./TodayGroup.css";
import TodayDate from "./TodayDate/TodayDate";
import Cash from "./Cash/Cash";
import Currency from "./Currency/Currency";


const TodayGroup = (props) => {
  
  return (
    <div>
      <table>
        <tr>
          <td>
      <div className="today-is">
        Today is: 
        </div>
        </td>
        <td>
          <div>
        <TodayDate todayDate = {props.todayData.date} />
        </div>
        <td>
          <div>
        
        </div>
          </td>
        </td>
        </tr>
        </table>
      <table>
        <tr>
          <td>
            <div>
              <Currency currency = {props.todayData.currency} />
            </div>
          </td>
          <td>
            <div>
              <Cash cash = {props.todayData.cash}/>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TodayGroup;
