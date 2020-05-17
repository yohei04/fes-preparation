import React, { useState, useEffect } from 'react'
import { ArtistList } from './index'

const FesData = (props) => {
  const [firstDayArtists, setFirstDayArtists] = useState()
  const [secondDayArtists, setSecondDayArtists] = useState()

  useEffect(() => {
    getArtistsList();
  }, firstDayArtists)

  function createElementFromHTML(html) {
    const tempEl = document.createElement('div');
    tempEl.innerHTML = html;
    const lineupContents = tempEl.querySelectorAll(".c-lineup-content")
    return lineupContents
  }

  const getArtistsList = async () => {
    const proxyUrl = 'https://cors-anywhere--clone.herokuapp.com/'
    const targetUrl = 'http://countdownjapan.jp/1920/lineup/artists/'
    const response = await fetch(proxyUrl + targetUrl)
    const data = await response.text()
    const fullDaysArtistsNode = createElementFromHTML(data)
    const firstDayArtistsNode = [...fullDaysArtistsNode[0].querySelectorAll(".c-artist__title")].map((node => node.textContent))
    setFirstDayArtists(firstDayArtistsNode)
    // .catch(() => console.log("Can’t access " + targetUrl + " response. Blocked by browser?"))
  }

  const collapseArtistList = () => {
    const artistList = document.querySelector(".artistList")
    artistList.style.display = artistList.style.display === 'none' ? '' : 'none';
  }

  console.log(firstDayArtists)
  return (
    <ul className="wrapper__left">
      <li className="year">2019</li>
      <ul>
        <li className="fesName">CDJ</li>
        <ul>
          <li className="date" onClick={collapseArtistList}>12/28</li>
          <ul className="artistList" style={{ display: "none" }}>
            <ArtistList artists={firstDayArtists} getArtistName={props.getArtistName} />
          </ul>
          <li className="date">12/29</li>
          <li className="date">12/30</li>
          <li className="date">12/31</li>
        </ul>
        <li className="fesName">RIJF</li>
      </ul>
    </ul>
  )
}

export default FesData

