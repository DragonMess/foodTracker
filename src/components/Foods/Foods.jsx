import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Results from "../Results/Results";
import SearchBar from "../SearchBar/SearchBar";
import firebaseApp from "../../firebase";
function Foods() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const data = firebaseApp.database().ref("food");
    data.on("value", (dbValue) => {
      setResults(dbValue.val());
    });
  }, []);
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2 className="form-title">Foods</h2>
        </div>
        <SearchBar setTerm={setTerm} term={term} />
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Select a food from the list</Form.Label>
          <Form.Control as="select" multiple>
            <Results results={results} term={term} />
          </Form.Control>
        </Form.Group>
        <div className="btns">
          <Button variant="primary" className="signIn-btn" href="">
            Add Food
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Foods;
