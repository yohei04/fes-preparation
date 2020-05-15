/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */
import React from 'react'

const SpotifyApi = () => {
  var request = require('request'); // "Request" library

  var client_id = '81e31de55e6244b59d4f6255fd70057e'; // Your client id
  var client_secret = 'b697bbb8e2af4d989c44ebb34e4d4ddb'; // Your secret

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
        console.log(body);
      });
    }
  });

  return (
    <div>
      <h1></h1>
    </div>
  )
}

export default SpotifyApi

