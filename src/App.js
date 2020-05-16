import React, { useState, useEffect } from 'react'
import './App.css';
import { Song, Search } from './components/index';

const App = () => {

  const client_id = process.env.REACT_APP_SPOTIFY_API_ID; // Your client id
  const client_secret = process.env.REACT_APP_SPOTIFY_API_KEY; // Your secret

  const [songs, setSongs] = useState([]);
  const [artistName, setArtistName] = useState([]);

  useEffect(() => {
    getSpotifyArtistName();
  }, [])


  var request = require('request'); // "Request" library

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

  const getSpotifyArtistName = () => {
    request.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        // use the access token to access the Spotify Web API
        var token = body.access_token;
        var options = {
          url: 'https://api.spotify.com/v1/search?q=04%20Limited%20Sazabys&type=artist',
          headers: {
            'Authorization': 'Bearer ' + token
          },
          json: true
        };

        request.get(options, function (error, response, body) {
          const spotifyArtistId = body.artists.items[0].id
          request.post(authOptions, function (error, response, body) {
            if (!error && response.statusCode === 200) {
              // use the access token to access the Spotify Web API
              var token = body.access_token;
              var options = {
                url: `https://api.spotify.com/v1/artists/${spotifyArtistId}/top-tracks?country=JP`,
                headers: {
                  'Authorization': 'Bearer ' + token
                },
                json: true
              };

              request.get(options, function (error, response, body) {
                setSongs(body.tracks)
              });
            }
          });
        });
      }
    });
  }



  console.log(songs)
  return (
    <div>
      {(songs.length === 0)
        ? <></>
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
      </div>
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
