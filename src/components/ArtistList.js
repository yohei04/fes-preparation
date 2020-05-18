import React, { useState } from 'react'


const ArtistList = (props) => {

  const [artistName, setArtistName] = useState("");

  // const getArtistName = (e) => {
  //   setArtistName(e.target.textContent)
  //   console.log(artistName)
  // }

  return (
    <>
      {props.artists === undefined ? <></> : props.artists.map((artist) => (
        <li onClick={props.getArtistName}>{artist}</li>
      ))}
    </>
  )
}

export default ArtistList

