import React from 'react'
import { Button } from 'react-bootstrap';
import Child from '../Child/Child';
import "./ChildList.css"
const data = {
  users:[
{id:1,firstName:"Papa",lastName:"Poponito",email:"papa@gmail.com",password:"4545"},
{id:2,firstName:"Mama",lastName:"Mamanita",email:"mama@gmail.com",password:"1111"},
  ],
  children:[
    {id:1,firstName:"Pedro",lastName:"Pony",dob:"02/03/2003",weight:"45",height:"145",chest:"35",head:"28",dateMeasures:"2020-10-08"},
    {id:2,firstName:"Peppa",lastName:"Pig",dob:"02/03/2003",weight:"45",height:"145",chest:"35",head:"28",dateMeasures:"2020-10-08"},
    {id:3,firstName:"Suzy",lastName:"Sheep",dob:"02/03/2003",weight:"45",height:"145",chest:"35",head:"28",dateMeasures:"2020-10-08"},

]
}

function ChildList() {
  const children = data.children.map(child=>{
    return (
  <Child 
  firstName={child.firstName}
  lastName={child.lastName}
  weight={child.weight}
  height={child.height}
  chest={child.chest}
  head={child.head}
  dateMeasures={child.dateMeasures}
  />
    )
  })
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2 className="form-title">Child List</h2>
        </div>
        <div className="childList">
        {children}
        </div>
        <div className="btns">
            <Button variant="primary" className="signIn-btn">Add child</Button>
        </div>
      </div>
    </div>
  )
}
export default ChildList;