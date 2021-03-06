import React from 'react'
import { Button } from 'react-bootstrap';
import Child from '../Child/Child';
import "./ChildList.css"
const data = {
  users:[
    {id:1,firstName:"Papa",lastName:"Poponito",email:"papa@gmail.com",password:"4545"},
    {id:2,firstName:"Mama",lastName:"Mamanita",email:"mama@gmail.com",password:"1111"},
  ],
  pattient:[
    {id:1,firstName:"Pedro",lastName:"Pony",dob:"02/03/2003",weight:"45",height:"145",chest:"35",head:"28",dateMeasures:"2020-10-08"},
    {id:2,firstName:"Peppa",lastName:"Pig",dob:"02/03/2003",weight:"45",height:"145",chest:"35",head:"28",dateMeasures:"2020-10-08"},
    {id:3,firstName:"Suzy",lastName:"Sheep",dob:"02/03/2003",weight:"45",height:"145",chest:"35",head:"28",dateMeasures:"2020-10-08"},
  ],
  pattientMeasurement:[
    {id:1,patientId:1,weight:"45",height:"145",chest:"35",head:"28",dateMeasures:"2020-10-08"},
    {id:2,patientId:2,weight:"45",height:"145",chest:"35",head:"28",dateMeasures:"2020-10-08"},
    {id:3,patientId:3,weight:"45",height:"145",chest:"35",head:"28",dateMeasures:"2020-10-08"},
    {id:4,patientId:1,weight:"48",height:"147",chest:"39",head:"29",dateMeasures:"2020-11-08"},
    {id:5,patientId:2,weight:"48",height:"147",chest:"39",head:"29",dateMeasures:"2020-11-08"},
    {id:6,patientId:3,weight:"48",height:"147",chest:"39",head:"29",dateMeasures:"2020-11-08"},
  ],
  dietPlan:[
    {id:1,patientId:1,startDate:"2020-10-01",endDate:"2020-11-01",targetCal:700,targetFat:300,targetMin:100},
    {id:2,patientId:2,startDate:"2020-10-01",endDate:"2020-11-01",targetCal:700,targetFat:300,targetMin:100},
    {id:3,patientId:3,startDate:"2020-10-01",endDate:"2020-11-01",targetCal:700,targetFat:300,targetMin:100},
  ],
  food: [
    {id:1,name:"banane",type:"fruit",protein:78,fat:13,cal:100,timestamp:"2020-01-01",owner:"IAHP"},
    {id:2,name:"apple",type:"fruit",protein:78,fat:13,cal:100,timestamp:"2020-01-01",owner:"IAHP"},
    {id:3,name:"rice",type:"grains",protein:78,fat:13,cal:100,timestamp:"2020-01-01",owner:"IAHP"},
    {id:4,name:"jabuticaba",type:"fruit",protein:78,fat:13,cal:100,timestamp:"2020-01-01",owner:"Adilson"},
  ],
  foodEntry: [
    {id:1,patientId:1,foodId:1,meal:"breakfast",quantity:3,time:"9:00",date:"2020-10-08"},
    {id:2,patientId:1,foodId:2,meal:"breakfast",quantity:3,time:"9:00",date:"2020-10-08"},
    {id:2,patientId:1,foodId:3,meal:"lunch",quantity:3,time:"12:00",date:"2020-10-08"},
  ]
}

function ChildList() {
  const children = data.pattient.map(child=>{
    return (
  <Child
  key={child.id} 
  patientId={child.id} 
  firstName={child.firstName}
  lastName={child.lastName}
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
            <Button variant="primary" className="signIn-btn" href="/addchild">Add child</Button>
        </div>
      </div>
    </div>
  )
}
export default ChildList;