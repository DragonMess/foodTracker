import React from "react";
import "./Results.css";
function Results(props) {
  const { results } = props;
  return results.map((food) => {
    return <option key={food.id}>{food.name}</option>;
  });
}

export default Results;
