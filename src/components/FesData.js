import React, { useState, useEffect } from 'react'


const FesData = () => {
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

  return (
    <div>
      {artists === undefined ? <></> : artists.map((artist) => (
        <p>{artist}</p>
      ))}
    </div>
  )
}

export default FesData

