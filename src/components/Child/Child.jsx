import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import EditSaveCancel from '../EditSaveCancel/EditSaveCancel';
import Measures from '../Measures/Measures';
import "./Child.css"
function Child(props) {
  const { firstName,lastName,height,weight,chest,head,dateMeasures} = props;

 const [ dataEdit, setDataEdit ] = useState(false)

  return (
    <article className="childListSection">
       <div className="child-btn" >{firstName}{" "}{lastName}</div>
      <div className="child-info">
        <div className="textInfo">
        <div className="InfoData">Today Calories:</div><div className="InfoValue">00{" "}cal</div>
        </div>
      </div>
       <div className="tabOptions">
         <div className="option1" onClick={()=>setDataEdit(!dataEdit)}>Meausures</div>
         <div className="option2">Meals</div>
         <div className="option3">Program</div>
       </div>
       {dataEdit ? (
         <div>
        <Measures></Measures>
      </div>
       ):(<div></div>)} 
    </article>
  )
}

export default Child
