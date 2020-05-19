import React from 'react'

const Song = (props) => {

  const adjustAudioVol = () => {
    const audio = document.querySelector("audio");
    audio.volume = 0.1;
  }
  // console.log(props.audio)
  return (
    <div className="song">
      <h3 className="song__title"><span>{props.rank + 1}位 </span><span>{props.songName}</span></h3>
      <div className="song__image">
        <img src={props.image} alt="" />
      </div>
      <div className="song__playerAndFullLink flex">
        {props.audio === null
          ? <></>
          : <audio controls preload="none" name="media" src={props.audio} type="audio/mpeg" onPlay={adjustAudioVol}></audio>
        }
        <p><a className="song__fullSong" href={props.spotifyLink} target="_blank" rel="noopener noreferrer">フルで聞く</a></p>
      </div>
    </div>
  )
}

export default Song

