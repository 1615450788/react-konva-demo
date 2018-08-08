import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoBang from './container/GoBang';
import { Provider } from 'react-redux';
import configuerStore from './store/index'
let store = configuerStore;
class App extends Component {
  render() {
    return (
      <Provider
        store={store}
      >
        <div className="App">
          <GoBang />
        </div>
      </Provider>
    );
  }
}

export default App;
