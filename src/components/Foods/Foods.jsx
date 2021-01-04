import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Results from "../Results/Results";
import SearchBar from "../SearchBar/SearchBar";
import firebaseApp from "../../firebase";
import "./Foods.css";
function Foods() {
  useEffect(() => {
    const data = firebaseApp.database().ref("food");
    data.on("value", (dbValue) => {
      setResults(dbValue.val());
    });
  }, []);
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [selectedfood, setSelectedFood] = useState("");
  console.log(selectedfood);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2 className="form-title">Foods</h2>
        </div>
        <SearchBar setTerm={setTerm} term={term} />
        <Form.Group>
          <Form.Label>Select a food from the list</Form.Label>
          <div className="resultArea">
            <Results
              results={results}
              term={term}
              setSelectedFood={setSelectedFood}
            />
          </div>
        </Form.Group>
      </div>
      <div className="card">
        <div className="card-title">
          <h2 className="form-title">Foods</h2>
        </div>
        <div className="detailFood"></div>
        <div className="btns">
          <Button variant="primary" className="signIn-btn" href="">
            Add Food
          </Button>
          <Button variant="primary" className="cancel-btn" href="">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Foods;
