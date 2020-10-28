import React from 'react'
import { Button, Row } from 'react-bootstrap';
import "./ChildList.css"
const data = {
  users:[
{id:1,firstName:"Papa",lastName:"Poponito",email:"papa@gmail.com",password:"4545"},
{id:2,firstName:"Mama",lastName:"Mamanita",email:"mama@gmail.com",password:"1111"},
  ],
  children:[
    {id:1,firstName:"Pedro",lastName:"Pony",dob:"02/03/2003",weight:"45",height:"145",chest:"35",head:"28",dateMesures:"08/10/2020"},
    // {id:2,firstName:"Pepa",lastName:"Pig",dob:"02/03/2003",weight:"45",height:"145",chest:"35",head:"28",dateMesures:"08/10/2020"},
    // {id:3,firstName:"Suzy",lastName:"Sheep",dob:"02/03/2003",weight:"45",height:"145",chest:"35",head:"28",dateMesures:"08/10/2020"},
    
]
}

function ChildList() {
  const children = data.children.map(child=>{
    return (
  <div className="child-btn" onClick={()=>{alert(`Hello ${child.firstName}`)}}>{child.firstName}{" "}{child.lastName}</div>
    )
  })
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2 className="form-title">Child List</h2>
        </div>
        {/* <div className="child-btn" onClick={()=>{alert("hello Pedro Pony")}}>Pedro Pony</div> */}
        {children}
        <div className="btns">
            <Button variant="primary" className="signIn-btn">Add child</Button>
        </div>
      </div>
    </div>
  )
}
export default ChildList;