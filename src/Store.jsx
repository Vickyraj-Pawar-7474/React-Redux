import rootreducer from "./Reducer/index";

import {createStore} from 'redux';

const store= createStore(rootreducer);

export default store;