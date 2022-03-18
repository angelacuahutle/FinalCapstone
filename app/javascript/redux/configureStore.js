import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import ThingReducer from './things/things';

const reducer = combineReducers({
  Thing: ThingReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;