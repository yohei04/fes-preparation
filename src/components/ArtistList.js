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
        {props.artists === undefined ? <></> : props.artists.map((artist) => (
          <li onDoubleClick={props.getArtistName}>{artist}</li>
        ))}
        {/* <li className="artistName" onDoubleClick={props.getArtistName}>04 Limited Sazabyz</li>
        <li className="artistName" onDoubleClick={props.getArtistName}>マキシマムザホルモン</li>
        <li className="artistName" onDoubleClick={props.getArtistName}>Mrs. Green Apple</li>
        <li className="artistName" onDoubleClick={props.getArtistName}>チャットモンチー</li>
        <li className="artistName" onDoubleClick={props.getArtistName}>MONGOL800</li>
        <li className="artistName" onDoubleClick={props.getArtistName}>ヤバイTシャツ屋さん</li> */}
      </ul>
    </div>
  )
}

export default ArtistList

