import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

import Home from './components/home/home';
import Items from './components/items/items';

export default class App extends Component {
  state = { username: 'Tia' };


  render() {
    const { username } = this.state;
    return (
      <div>
        <Home />
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <Items />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}
