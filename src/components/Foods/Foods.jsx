import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import SearchBar from '../SearchBar/SearchBar'

function Foods() {

  const [term , setTerm ] = useState("")
  const [ results , setResults ] = useState([])
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2 className="form-title">Foods</h2>
        </div>
        <SearchBar onSearch={}/>
   {/* <Form.Group controlId="formGroupFoodName" >
      <Form.Label>Food Name</Form.Label>
      <Form.Control type="name" placeholder="Enter Food name" className="placeHolder"/>
  </Form.Group> */}
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Select a food from the list</Form.Label>
    <Form.Control as="select" multiple>
      <Results
      results={results}
      />
      {/* <option>Banana</option>
      <option>Apple</option>
      <option>Rice</option>
      <option>Tomato</option>
      <option>Cofee</option> */}
    </Form.Control>
  </Form.Group>
        <div className="btns">
            <Button variant="primary" className="signIn-btn" href="">Add Food</Button>
        </div>
      </div>
    </div>
  )
}

export default Foods
