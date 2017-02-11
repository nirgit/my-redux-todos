import { createStore } from 'redux'
import appReducer from './reducers/appReducer'

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './view/TodoList';

let store = createStore(appReducer);

window.store = store;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Todo list on Redux</h2>
        </div>

        <TodoList />
      </div>
    );
  }
}

export default App;
