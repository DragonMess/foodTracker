import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import "./NotLogged.css";
function NotLogged() {
  return (
    <article className="main">
      <Jumbotron className="jumbo">
        <h1>Food Tracker</h1>
        <p>
          This is an web application to help parents to follow the diet child's
        </p>
        <p>
          <Button variant="primary" href="/register">
            Sign Up
          </Button>
        </p>
        <p>
          <Button variant="success" href="/login">
            Sign In
          </Button>
        </p>
      </Jumbotron>
    </article>
  );
}

export default NotLogged;
