import React, { useState, useEffect } from 'react'
import { ArtistList } from './index'

const FesData = (props) => {
  const [artists, setArtists] = useState()

  useEffect(() => {
    getArtistsList();
  }, artists)

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
    const fullDaysLineupNode = createElementFromHTML(data)
    const firstDayLineUp = [...fullDaysLineupNode[0].querySelectorAll(".c-artist__title")].map((node => node.textContent))
    setArtists(firstDayLineUp)
    // .catch(() => console.log("Can’t access " + targetUrl + " response. Blocked by browser?"))
  }

  console.log(artists)
  return (
    <div>
      <p>12/28</p>
      <ArtistList artists={artists} getArtistName={props.getArtistName} />
    </div>
  )
}

export default FesData

