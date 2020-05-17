import React, { useState, useEffect } from 'react';
import { ArtistList, SpotifyApi, FesData } from './index';

const Search = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("サカナクション");

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  }
  
  const getArtistName = (e) => {
    setSearch(e.target.textContent)
    setQuery(e.target.textContent)
  }
  
  return (
    <>
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          検索
        </button>
      </form>
      <div className="container">
        <div className="container__left">
          <FesData getArtistName={getArtistName} />
        </div>
        <div className="container__right">
          <SpotifyApi searchArtistName={query} />
        </div>
      </div>
    </>
  )
}

export default Search

