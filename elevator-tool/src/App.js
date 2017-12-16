import React, { Component } from 'react';

// Adding Router for future scalability
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './components/homePage/HomePage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' component={ HomePage }/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
