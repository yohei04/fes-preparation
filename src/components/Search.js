import React, { useState, useEffect } from 'react';
import { SpotifyApi } from './index';

const Search = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("サカナクション");

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search)
    console.log(query)
  }

  useEffect(() => {
    
  }, [query])

  return (
    <div>
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          検索
        </button>
      </form>
      <SpotifyApi searchArtistName={query} />
    </div>
  )
}

export default Search

