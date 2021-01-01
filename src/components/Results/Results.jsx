import React from 'react'

function Results(props) {
  const {results } = props
  return results.map(food => {
    return < option 
    key={food.id}
    foodName={food.name}
    />
  })

}

export default Results
