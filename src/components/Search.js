import React, { useState } from 'react'

const Search = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  

  const updateSearch = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search)
  }

  return (
    <div>
      <form className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit" onClick={getSearch}>
          検索
        </button>
      </form>
    </div>
  )
}

export default Search

