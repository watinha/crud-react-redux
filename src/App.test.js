import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import post_reducer from './reducers/post_reducer';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  let store = createStore(post_reducer);
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
