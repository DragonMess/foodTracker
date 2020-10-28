import React from 'react'
import { Button, Form, Row } from 'react-bootstrap';
import "./Login.css"

function Login() {
  return (
    <div className="container">
      <Form className="formLogin">
        <div className="title">
        <h2 className="form-title">Login</h2>

        </div>
  <Form.Group controlId="formGroupEmail" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" className="placeHolder"/>
  </Form.Group>
  <Form.Group controlId="formGroupPassword" >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" className="placeHolder"/>
  </Form.Group>
  <div className="btns">
  <Button variant="primary" className="signIn-btn" >Log in</Button>
<Button variant="primary" className="cancel-btn">Cancel</Button>
  </div>

</Form>

    </div>
  )
}

export default Login;