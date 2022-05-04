import React from "react";
import "./App.css";

function PlainTable(props) {
  return (
    <div>
      <table class="plainTable">
        {props.data.map((e) => (
          <tr>
            <td>{e.n}</td>
            <td>{e.s}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default PlainTable;
