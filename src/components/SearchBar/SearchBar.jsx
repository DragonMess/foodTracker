import React, { useState } from 'react'

function SearchBar(props) {
 const [value, setValue] = useState("")
 

  return (
    <section className="search">
      <fom
      className="search_form"
      onSubmit={(e)=>e.preventDefault()}
      >
        <input
        className="radius"
        spellCheck="false"
        placeholder="Search Foods"
        name="search"
        type="text"
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        />
      </fom>
    </section>
  )
}
export default SearchBar