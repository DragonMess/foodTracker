import React from "react";
import "./Results.css";
function Results(props) {
  const { results, term, setSelectedFood } = props;
  return results
    .filter((val) => {
      if (term === "") {
        return val;
      } else if (val.name.toLowerCase().includes(term.toLowerCase())) {
        return val;
      }
    })
    .map((food) => {
      return (
        <div key={food.id}>
          {/* <input className="checkboxFood" type="checkbox" id={food.id} label /> */}
          <input
            className="labelFood"
            onClick={(e) => setSelectedFood(e.target.value)}
            value={food.name}
            readOnly={true}
          />
          <div clasname="foodList">
            <h7>{food.type}</h7>
            <h7>{food.cal}(Cal)</h7>
            <h7>{food.fat}(fat)</h7>
            <h7>{food.protein}(protein)</h7>
          </div>
          <hr />
        </div>
      );
    });
}
export default Results;
