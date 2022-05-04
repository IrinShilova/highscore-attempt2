import React from "react";
import allCountryScores from "./scores.js";
import CountryTable from "./CountryTable";

function AllTable() {
  return (
    <div>
      {allCountryScores.map((e) => (
        <CountryTable name={e.name} data={e.scores} />
      ))}
    </div>
  );
}

export default AllTable;
