import React from "react";
import "./SearchBar.css";
function SearchBar(props) {
  const { setTerm, term } = props;

  const handleSearch = (e) => {
    setTerm(e.target.value);
  };
  return (
    <section className="search">
      <form className="search_form" onSubmit={(e) => e.preventDefault()}>
        <input
          className="radius"
          spellCheck="false"
          placeholder="Search Foods"
          name="search"
          type="text"
          value={term}
          onChange={handleSearch}
        />
      </form>
    </section>
  );
}
export default SearchBar;
