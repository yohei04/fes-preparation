import React, { useState, useEffect } from 'react'
import { ArtistList } from './index'

const FesData = (props) => {
  const [firstDayArtists, setFirstDayArtists] = useState()
  const [secondDayArtists, setSecondDayArtists] = useState()
  const [thirdDayArtists, setThirdArtists] = useState()
  const [fourthDayArtists, setFourthDayArtists] = useState()

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
    const secondDayArtistsNode = [...fullDaysArtistsNode[1].querySelectorAll(".c-artist__title")].map((node => node.textContent))
    setSecondDayArtists(secondDayArtistsNode)
    const thirdDayArtistsNode = [...fullDaysArtistsNode[2].querySelectorAll(".c-artist__title")].map((node => node.textContent))
    setThirdArtists(thirdDayArtistsNode)
    const fourthDayArtistsNode = [...fullDaysArtistsNode[3].querySelectorAll(".c-artist__title")].map((node => node.textContent))
    setFourthDayArtists(fourthDayArtistsNode)
    // .catch(() => console.log("Can’t access " + targetUrl + " response. Balocked by browser?"))
  }

  const collapseArtistList = (e) => {
    // const artistLists = document.querySelectorAll(".artistList")
    // artistLists.forEach(artistList => artistList.style.display = "none")
    e.target.nextElementSibling.style.display = e.target.nextElementSibling.style.display === 'none' ? 'block' : 'none';
  }

  return (
    <ul>
      <li className="year">2019</li>
      <ul>
        <li className="fesName">CDJ</li>
        <ul>
          <li className="date" onDoubleClick={collapseArtistList}>12/28</li>
          <ul className="artistList" style={{ display: "block" }}>
            <ArtistList artists={firstDayArtists} getArtistName={props.getArtistName} />
          </ul>
          <li className="date" onDoubleClick={collapseArtistList}>12/29</li>
          <ul className="artistList" style={{ display: "none" }}>
            <ArtistList artists={secondDayArtists} getArtistName={props.getArtistName} />
          </ul>
          <li className="date" onDoubleClick={collapseArtistList}>12/30</li>
          <ul className="artistList" style={{ display: "none" }}>
            <ArtistList artists={thirdDayArtists} getArtistName={props.getArtistName} />
          </ul>
          <li className="date" onDoubleClick={collapseArtistList}>12/31</li>
          <ul className="artistList" style={{ display: "none" }}>
            <ArtistList artists={fourthDayArtists} getArtistName={props.getArtistName} />
          </ul>
        </ul>
        <li className="fesName">RIJF</li>
      </ul>
    </ul>
  )
}

export default FesData

