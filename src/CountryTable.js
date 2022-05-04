import React from "react";
import PlainTable from "./PlainTable";

function CountryTable(props) {    //props.name and props.data = array
  return (
    <div>
      <h2>HIGH SCORES: {props.name}</h2>
      <PlainTable data={props.data}/>
    </div>
  );
}

export default CountryTable;
