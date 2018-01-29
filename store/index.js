import { createStore } from 'redux';
import reducers from '../reducers'; // locates index.js in dir

const store = createStore{reducers};

export default store;
