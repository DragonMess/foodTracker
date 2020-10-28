import React from 'react'
import { Button, Col, Jumbotron } from 'react-bootstrap'
import "./NotLogged.css"
function NotLogged() {
  return (
    <article className="main">
      <Jumbotron className="jumbo">
  <h1>Food Tracker</h1>
  <p>
    This is an web application to help parents to follow the diet child's
  </p>
  <p>
    <Button variant="primary">Sign Up</Button>
  </p>
    <p>
    <Button variant="success">Sign In</Button>
  </p>
</Jumbotron>
    </article>
  )
}

export default NotLogged
