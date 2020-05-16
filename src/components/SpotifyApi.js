/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */
import React, { useState, useEffect } from 'react'
import { Song } from './index';

const SpotifyApi = (props) => {
  const client_id = process.env.REACT_APP_SPOTIFY_API_ID; // Your client id
  const client_secret = process.env.REACT_APP_SPOTIFY_API_KEY; // Your secret

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSpotifyArtistName();
  }, [props.searchArtistName])


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
          url: `https://api.spotify.com/v1/search?q=${props.searchArtistName}&type=artist`,
          headers: {
            'Authorization': 'Bearer ' + token
          },
          json: true
        };

        request.get(options, function (error, response, body) {
          const spotifyArtistId = body.artists.items[0].id
          console.log(spotifyArtistId)

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
  )
}

export default SpotifyApi

