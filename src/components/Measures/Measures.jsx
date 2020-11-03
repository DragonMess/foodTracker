import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import EditSaveCancel from '../EditSaveCancel/EditSaveCancel'
import "./Measures.css"

function Measures(props) {
  const { firstName,lastName,height,weight,chest,head,dateMeasures} = props;
  const [ editMode, setEditMode ] = useState("")
 
  const [ newDate, setNewDate ] = useState(dateMeasures)
  const [ newFirstName, setFirstName ] = useState(firstName)
  const [ newLastName, setNewLastName ] = useState(lastName)
  const [ newHeight, setNewHeight ] = useState(height)
  const [ newWeight, setNewWeight ] = useState(weight)
  const [ newChest, setNewChest ] = useState(chest)
  const [ newHead, setNewHead ] = useState(head)

  const [readOnly, setReadOnly] = useState(true);

const editField = ()=>{
  setReadOnly(!readOnly);
  setEditMode("hidden");

}
const handleSave = (e)=> {
  setReadOnly(true)
}
  const handleCancel = (e)=> {
  setNewHeight("");
  setNewWeight("");
  setNewChest("");
  setNewHead("");
  setNewDate("");
  setReadOnly(true);
  setEditMode("");
  }
  const handleHeight = (e)=> {
  setNewHeight(e.target.value)
  }
  const handleWeight = (e)=> {
  setNewWeight(e.target.value)
  }
  const handleChest = (e)=> {
  setNewChest(e.target.value)
  }
  const handleHead = (e)=> {
  setNewHead(e.target.value)
  }
  const handleDate = (e)=> {
    setNewDate(e.target.value)
  }
  return (
    <div>
      <section className="child-info">
        <div className="textInfo">
        <div className="InfoData">Weight:</div>
        <Form.Control type="number" placeholder="add measure"className="placeHolder measureForm" value={newWeight} onChange={handleWeight} readOnly={readOnly}/>
        </div>
      </section>
      <hr/>
      <section className="child-info">
        <div className="textInfo">
        <div className="InfoData">Height:</div>
        <Form.Control type="number" placeholder="add measure" className="placeHolder measureForm" value={newHeight} onChange={handleHeight} readOnly={readOnly}/>
        </div>
      </section>
      <hr/>
      <section className="child-info">
        <div className="textInfo">
        <div className="InfoData">Chest:</div>
        <Form.Control type="number" placeholder="add measure"className="placeHolder measureForm" value={newChest} onChange={handleChest} readOnly={readOnly}/>
        </div>
      </section>
      <hr/>
      <section className="child-info">
        <div className="textInfo">
        <div className="InfoData">Head:</div>
        <Form.Control type="number" placeholder="add measure" className="placeHolder measureForm" value={newHead} onChange={handleHead} readOnly={readOnly}/>
        </div>
      </section>
      <hr/>
      <section className="child-info">
        <Form.Group controlId="formGroupDate" >
            <Form.Control type="date" placeholder="Today" className="placeHolder" value={newDate} onChange={handleDate}/>
        </Form.Group>  
      </section>
      <hr/>
      <section className="child-info">
        {editMode === "hidden" ? <div><Button variant="success" className={""} onClick={handleSave}>Save</Button> <Button variant="danger" onClick={handleCancel} >Cancel</Button> </div>:
        <Button variant="primary" className={editMode} onClick={editField}>ADD NEW MEASURES</Button>}
        
      </section>
    </div>
  )
}

export default Measures
