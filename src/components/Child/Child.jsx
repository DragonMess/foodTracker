import React, { useState } from 'react'
import "./Child.css"
function Child(props) {
  const { firstName,lastName} = props;
  const [ edit, setEdit ] = useState(false)
  const [ dataEdit, setDataEdit ] = useState(false)
  return (
    <article className="childListSection">
       <div className="child-btn" >{firstName}{" "}{lastName}</div>
      <div className="child-info">
        <div className="textInfo">
        <div className="InfoData">Calories:</div><div className="InfoValue">00{" "}cal</div>
        </div>
      </div>
       <div className="tabOptions">
         <div className="option1" onClick={()=>setDataEdit(true)}>Data</div>
         <div className="option2">Meals</div>
         <div className="option3">Program</div>
       </div>
       {dataEdit ? (
      <div className="child-info">
        <div className="textInfo">
        <div className="InfoData">Weight:</div><div className="InfoValue">{firstName}</div>
        </div>
        <div className="icons">
          {!edit ? (
            <img className="iconEdit" onClick={()=>setEdit(!dataEdit)} src="./images/icons/pen-solid.svg" alt="editName" style={{color: "#F2805C",height: "1.8vh"}}>
            </img>
            ) : (
            <div>
              <img className="iconEdit" src="./images/icons/save-regular.svg" alt="editName" style={{color: "blue",height: "1.8vh"}}></img>{"  "}
              <img className="iconEdit" onClick={()=>setEdit(false)} src="./images/icons/window-close-regular.svg" alt="editName" style={{color: "red",height: "1.8vh"}}></img>
            </div>
          )}
        </div>
      </div>
       ):(<div></div>)}
    </article>
  )
}

export default Child

// onClick={()=>{alert(`Hello ${firstName}`)}}