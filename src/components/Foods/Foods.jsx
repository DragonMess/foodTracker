import React from 'react'
import { Button, Form } from 'react-bootstrap'

function Foods() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2 className="form-title">Foods</h2>
        </div>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>Select a food from the list</Form.Label>
    <Form.Control as="select" multiple>
      <option>Banana</option>
      <option>Apple</option>
      <option>Rice</option>
      <option>Tomato</option>
      <option>Cofee</option>
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
