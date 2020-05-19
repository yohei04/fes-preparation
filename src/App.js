import React from 'react'
import './styles/App.scss';
import './styles/reset.scss';
import { Header, About, Search } from './components/index';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {

  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Route exact path="/" component={Search} />
        <Route path="/about" component={About} />
        {/* <Search /> */}
      </div>
    </Router>
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
