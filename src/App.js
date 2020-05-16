import React from 'react'
import './App.css';
import { Search } from './components/index';

const App = () => {

  return (
    <div>
      <Search />
      {/* {(songs.length === 0)
        ? <></Search>
        // : <Search artistName={songs[0].artists[0].name} />
        : <Search artistName={artistName} />
      }
      <div className="songs">
        {songs.map((song, index) => (
          <Song
            rank={index}
            songName={song.name}
            image={song.album.images[2].url}
            audio={song.preview_url}
            spotifyLink={song.external_urls.spotify}
          />
        ))}
      </div> */}
    </div>
  )
}

export default App;


  // const getSongs = () => {
  //   request.post(authOptions, function (error, response, body) {
  //     if (!error && response.statusCode === 200) {
  //       // use the access token to access the Spotify Web API
  //       var token = body.access_token;
  //       var options = {
  //         url: `https://api.spotify.com/v1/artists/${spotifyArtistId}/top-tracks?country=JP`,
  //         headers: {
  //           'Authorization': 'Bearer ' + token
  //         },
  //         json: true
  //       };

  //       request.get(options, function (error, response, body) {
  //         setSongs(body.tracks)
  //         // console.log(songs)
  //       });
  //     }
  //   });
  // }
