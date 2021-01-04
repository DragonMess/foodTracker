import React from "react";
import "./Results.css";
function Results(props) {
  const { results, term } = props;
  return results
    .filter((val) => {
      if (term == "") {
        return val;
      } else if (val.name.toLowerCase().includes(term.toLowerCase())) {
        return val;
      }
    })
    .map((food) => {
      return <option key={food.id}>{food.name}</option>;
    });
}

export default Results;
