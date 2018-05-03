import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import RestaurantList from './components/Restaurantlist.jsx'
import Detail from './components/Detail.jsx'
import Error from './components/Error.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to RestaurantList</h1>
        </header>
        <Switch>
          <Route exact path="/" component={RestaurantList}/>
          <Route path="/detail/:id/:category" exact component={Detail}/>
          <Route component={Error}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
