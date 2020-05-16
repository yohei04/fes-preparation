import React from 'react'

const Song = (props) => {
  return (
    <div className="song">
      <h2>{props.rank + 1}位</h2>
      <h2>{props.songName}</h2>
      <img width="100px" height="100px" src={props.image} alt="" />
      {props.audio === null
        ? <></>
        : <video width="200px" height="80px" controls preload="none" name="media" src={props.audio} type="audio/mpeg"></video>
      }
      <a href={props.spotifyLink} target="_blank" rel="noopener noreferrer">フルで聞く</a>
    </div>
  )
}

export default Song

