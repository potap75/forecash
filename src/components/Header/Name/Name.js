import React, { useState } from "react";
import "./Name.css";

const Name = (props) => {
  const [name, setName] = useState(props.name);
  const clickHandler = (props) => {
    setName("CASHFORE");
    console.log(name);
  };

  return (
    <div>
      <table>
        <tr>
          <td>
            <p className="app-title">{name}</p>
          </td>
          <td>
            <button onClick={clickHandler}>Change Name</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Name;
