import React, { useState } from "react";
import Meals from "../Meals/Meals";
import Measures from "../Measures/Measures";
import "./Child.css";
function Child(props) {
  const { firstName, lastName, patientId } = props;

  const [measures, setMeasures] = useState(false);
  const [meals, setMeals] = useState(false);
  //  const [ program, setProgram ] = useState(false)

  return (
    <article className="childListSection">
      <div className="child-btn">
        {firstName} {lastName}
      </div>
      <div className="child-info">
        <div className="textInfo">
          <div className="InfoData">Today Calories:</div>
          <div className="InfoValue">00 cal</div>
        </div>
      </div>
      <div className="tabOptions">
        <div
          className="option1"
          onClick={() => {
            setMeasures(!measures);
            setMeals(false);
          }}
        >
          Meausures
        </div>
        <div
          className="option2"
          onClick={() => {
            setMeals(!meals);
            setMeasures(false);
          }}
        >
          Meals
        </div>
        <div className="option3">Program</div>
      </div>
      {measures ? <Measures patientId={patientId} /> : <div></div>}
      {meals ? <Meals patientId={patientId} /> : <div></div>}
    </article>
  );
}

export default Child;
