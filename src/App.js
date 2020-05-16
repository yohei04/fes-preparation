import React, { useState, useEffect } from 'react'
import './App.css';
import Song from './Song';

const client_id = process.env.REACT_APP_SPOTIFY_API_ID; // Your client id
const client_secret = process.env.REACT_APP_SPOTIFY_API_KEY; // Your secret

const App = () => {
  var request = require('request'); // "Request" library
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongs();
  }, [])

  // your application requests authorization
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

  const getSongs = () => {
    request.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        // use the access token to access the Spotify Web API
        var token = body.access_token;
        var options = {
          url: 'https://api.spotify.com/v1/artists/6Gem5Nh6gd9PCtWdzR7Odh/top-tracks?country=JP',
          headers: {
            'Authorization': 'Bearer ' + token
          },
          json: true
        };
      
        request.get(options, function (error, response, body) {
          setSongs(body.tracks)
          console.log(body.tracks)
        });
      }
    });
  }

  return (
    <div>
      {/* <h1>{songs[0].name}</h1> */}
      {songs.map((song, index) => (
        <Song
          rank={index}
          artistName={song.artists[0].name}
          songName={song.name}
          image={song.album.images[2].url}
          audio={song.preview_url}
          spotifyLink={song.external_urls.spotify}
        />
      ))}
    </div>
  )
}

export default App;
