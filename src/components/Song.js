import React from 'react'

const Song = (props) => {

  const adjustAudioVol = () => {
    const audio = document.querySelector("audio");
    audio.volume = 0.3;
  }
  
  return (
    <div className="song">
      <h3 className="song__title"><span>{props.rank + 1}位 </span><span>{props.songName}</span></h3>
      <div>
        <img src={props.image} alt="" />
      </div>
      {props.audio === null
        ? <></>
        : <audio controls preload="none" name="media" src={props.audio} type="audio/mpeg" onPlay={adjustAudioVol}></audio>
      }
      <a href={props.spotifyLink} target="_blank" rel="noopener noreferrer">フルで聞く</a>
    </div>
  )
}

export default Song

