import React, { useState } from 'react'

const ArtistList = (props) => {

  const [artistName, setArtistName] = useState("");

  // const getArtistName = (e) => {
  //   setArtistName(e.target.textContent)
  //   console.log(artistName)
  // }

  return (
    <div className="wrapper__left">
      <ul>
        <li onDoubleClick={props.getArtistName}>04 Limited Sazabyz</li>
        <li onDoubleClick={props.getArtistName}>マキシマムザホルモン</li>
        <li onDoubleClick={props.getArtistName}>Mrs. Green Apple</li>
        <li onDoubleClick={props.getArtistName}>チャットモンチー</li>
      </ul>
    </div>
  )
}

export default ArtistList

