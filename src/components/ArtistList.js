import React from 'react'

const ArtistList = (props) => {

  return (
    <>
      {props.artistsNames === undefined ? <></> : props.artistsNames.map((artistName) => (
        <li onClick={props.getArtistName} key={artistName}>{artistName}</li>
      ))}
    </>
  )
}

export default ArtistList

