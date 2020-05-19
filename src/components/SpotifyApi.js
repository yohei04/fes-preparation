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

  const [songs, setSongs] = useState(["first"]); // 初回読み込みのバグ回避

  useEffect(() => {
    const client_id = process.env.REACT_APP_SPOTIFY_API_ID; // Your client id
    const client_secret = process.env.REACT_APP_SPOTIFY_API_KEY; // Your secret

    const getSpotifyArtistInfo = () => {
      const request = require('request'); // "Request" library

      // your application requests authorization
      const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
          'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
        },
        form: {
          grant_type: 'client_credentials'
        },
        json: true
      };

      request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          // use the access token to access the Spotify Web API
          const token = body.access_token;
          const options = {
            url: `https://api.spotify.com/v1/search?q=${props.searchArtistName}&type=artist&market=JP`,
            headers: {
              'Authorization': 'Bearer ' + token
            },
            json: true
          };

          request.get(options, function (error, response, body) {
            let spotifyArtistId;
            // Spotifyで検索できないバンドのバグ回避
            if (body.artists.items[0] === undefined) {
              spotifyArtistId = ""
              // 似た名前が検索されるバグ回避
            } else if (body.artists.items[0].id === "661KPcCQNUUVjnqerOw38d") {
              spotifyArtistId = "" // locofrank
            } else {
              spotifyArtistId = body.artists.items[0].id
            };

            request.post(authOptions, function (error, response, body) {
              if (!error && response.statusCode === 200) {
                // use the access token to access the Spotify Web API
                const token = body.access_token;
                const options = {
                  url: `https://api.spotify.com/v1/artists/${spotifyArtistId}/top-tracks?country=JP`,
                  headers: {
                    'Authorization': 'Bearer ' + token
                  },
                  json: true
                };

                request.get(options, function (error, response, body) {
                  if (body.tracks === undefined) {
                    setSongs(["error"]) // Spotifyにバンドが登録されてない場合
                  } else if (body.tracks.length === 0) {
                    setSongs(["error"]) // バンドは登録されているが曲が登録されてない場合
                  } else {
                    setSongs(body.tracks)
                  };
                });
              }
            });
          });
        }
      });
    }
    getSpotifyArtistInfo();
  }, [props.searchArtistName])

  console.log(songs)

  if (songs[0] === "first") {
    return ""
  } else {
    return (
      <div className="songs">
        {(songs[0] === "error") //バンド名からバンドが取得できない場合
          ? <p className="getArtistNameError">バンドの取得に失敗しました。<br />このバンドはまだSpotifyに登録されていないかもしれません。<br />もしくは僕の実装の問題です。<br />ごめん！！</p>
          // <a href={process.env.REACT_APP_TWITTER_URL} target="_blank" rel="noopener noreferrer">開発者まで</a>
          : songs.map((song, index) => (
            <Song
              key={index}
              rank={index}
              songName={song.name}
              image={song.album.images[1].url}
              audio={song.preview_url}
              spotifyLink={song.external_urls.spotify}
            />
          ))}
      </div>
    )
  }
}

export default SpotifyApi

