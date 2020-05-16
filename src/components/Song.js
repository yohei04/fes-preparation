import React from 'react'

const Song = (props) => {
  return (
    <div className="song">
      <h1>{props.rank + 1}位</h1>
      <h1>{props.songName}</h1>
      <img src={props.image} alt=""/>
      <video controls preload="none" name="media">
        <source src={props.audio} type="audio/mpeg"/>
      </video>
      <a href={props.spotifyLink} target="_blank" rel="noopener noreferrer">フルで聞く</a>
    </div>
  )
}

export default Song

