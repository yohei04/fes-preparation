import React from 'react'
import './styles/App.scss';
import './styles/reset.scss';
import { Search } from './components/index';

const App = () => {

  return (
    <div className="wrapper">
      <Search />
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
