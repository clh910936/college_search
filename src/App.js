import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './containers/Home';
import SearchPage from './containers/SearchPage';
import NavBar from './components/NavBar';


class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}




export default App;
