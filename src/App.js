import React from 'react'
import './styles/App.scss';
import { Header, About, Search } from './components/index';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {

  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  )
}



export default App;
