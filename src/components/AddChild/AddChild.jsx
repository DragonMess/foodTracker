import React from "react";
import { Button, Form, Row } from "react-bootstrap";
import "./AddChild.css";

function AddChild() {
  return (
    <div className="container">
      <Form className="formLogin">
        <div className="title">
          <h2 className="form-title">Child Information</h2>
        </div>

        <Form.Group controlId="formGroupEmail">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="name"
            placeholder="First Name"
            className="placeHolder"
          />
        </Form.Group>

        <Form.Group controlId="formGroupEmail">
          <Form.Label>Laste Name:</Form.Label>
          <Form.Control
            type="name"
            placeholder="Last Name"
            className="placeHolder"
          />
        </Form.Group>
        <Form.Group controlId="formGroupBOD">
          <Form.Label>Date of Birth:</Form.Label>
          <Form.Control
            type="date"
            placeholder="Date of Birth"
            className="placeHolder"
          />
        </Form.Group>
        <hr></hr>
        <div className="title">
          <h2 className="form-title">Measures</h2>
        </div>
        <Row className="rowForm">
          <Form.Group controlId="formGroupWeight">
            <Form.Label>Weight</Form.Label>
            <Form.Control
              type="number"
              placeholder="Weight (gr)"
              className="placeHolder"
            />
          </Form.Group>

          <Form.Group controlId="formGroupHeight">
            <Form.Label>Height</Form.Label>
            <Form.Control
              type="number"
              placeholder="Height (cm)"
              className="placeHolder"
            />
          </Form.Group>
        </Row>
        <Row className="rowForm">
          <Form.Group controlId="formGroupChest">
            <Form.Label>Chest</Form.Label>
            <Form.Control
              type="number"
              placeholder="Chest (cm)"
              className="placeHolder"
            />
          </Form.Group>

          <Form.Group controlId="formGroupHead">
            <Form.Label>Head</Form.Label>
            <Form.Control
              type="number"
              placeholder="Head (cm)"
              className="placeHolder"
            />
          </Form.Group>
        </Row>

        <Form.Group controlId="formGroupDate">
          <Form.Label>Date of measures:</Form.Label>
          <Form.Control
            type="date"
            placeholder="Today"
            className="placeHolder"
          />
        </Form.Group>

        <div className="btns">
          <Button variant="primary" className="signIn-btn" href="/childlist">
            Save
          </Button>
          <Button variant="primary" className="cancel-btn" href="/childlist">
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddChild;
