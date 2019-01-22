import { createStore } from 'redux';
import post_reducer from '../reducers/post_reducer';

let store = createStore(post_reducer);

export default store;
