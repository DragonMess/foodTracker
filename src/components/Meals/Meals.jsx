import React, { useState } from 'react'
import "./Meals.css"

function Meals(props) {
 const [ breakfast , setBreakfast ] = useState(false)
 const [ lunch , setLunch ] = useState(false)
 const [ dinner , setDinner ] = useState(false)
 const [ snack , setSnack ] = useState(false)
// console.log(props)
  return (
    <div>
      <section className="meal-info">
        <div className="textInfo">
        <div className="InfoMeal" onClick={()=>setBreakfast(!breakfast)}>Breakfast</div>
        </div>
      </section>
      { breakfast ? 
      <section className="food-info">
        <div className="textFood">
        <div className="foodTxt">+  Add food</div>
        </div>
      </section>: <div></div>
      }      
      <hr/>
      <section className="meal-info">
        <div className="textInfo">
        <div className="InfoMeal" onClick={()=>setLunch(!lunch)}>Lunch</div>
        </div>
      </section>
      { lunch ? 
      <section className="food-info">
        <div className="textFood">
        <div className="foodTxt">+  Add food</div>
        </div>
      </section>: <div></div>
      }
      <hr/>
      <section className="meal-info">
        <div className="textInfo">
        <div className="InfoMeal" onClick={()=>setDinner(!dinner)}>Dinner</div>
        </div>
      </section>
      { dinner ? 
      <section className="food-info">
        <div className="textFood">
        <div className="foodTxt">+  Add food</div>
        </div>
      </section>: <div></div>
      }
      <hr/>
      <section className="meal-info">
        <div className="textInfo">
        <div className="InfoMeal" onClick={()=>setSnack(!snack)}>Snack </div>
        </div>
      </section>
      { snack ? 
      <section className="food-info">
        <div className="textFood">
        <div className="foodTxt">+  Add food</div>
        </div>
      </section>: <div></div>
      }
    </div>
  )
}

export default Meals;
