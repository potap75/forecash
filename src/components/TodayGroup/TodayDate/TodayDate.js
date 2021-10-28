import "./TodayDate.css"
import React, { useState } from "react";

const TodayDate = (props) => {
    const[todayDate, setTodayDate] = useState(props.todayDate);

  const clickHandler =(props)=> {
    setTodayDate("10/22/2021");
    console.log(todayDate);
  }

    return (
        <div>
          <table>
            <tr>
              <td>
        <p className="today">{todayDate}</p>
        </td>
        <td>
        <button onClick={clickHandler}>Change Date</button>
        </td>
        </tr>
        </table>
        </div>
    )
}

export default TodayDate;