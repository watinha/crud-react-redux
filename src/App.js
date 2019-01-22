import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostComponent from './posts/post.component';
import store from './store/index';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
            <Provider store={store}>
                <PostComponent />
            </Provider>
        </div>
      </div>
    );
  }
}

export default App;
