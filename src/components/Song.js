import React from 'react'

const Song = (props) => {

  const adjustAudioVol = () => {
    const audio = document.querySelector("audio");
    audio.volume = 0.3;
  }
  
  return (
    <div className="song">
      <p><span>{props.rank + 1}位 </span><span>{props.songName}</span></p>
      <img width="100px" height="100px" src={props.image} alt="" />
      {props.audio === null
        ? <></>
        : <audio controls preload="none" name="media" src={props.audio} type="audio/mpeg" onPlay={adjustAudioVol}></audio>
      }
      <a href={props.spotifyLink} target="_blank" rel="noopener noreferrer">フルで聞く</a>
    </div>
  )
}

export default Song

