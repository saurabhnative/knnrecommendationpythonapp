/**
 * Central redux store needed to hold entire application state
 * and apply various middlewares
 */

 import { createStore, applyMiddleware } from 'redux';
 /*
  *Thunk is used to create action creators that return a function
  *More info: https://github.com/reduxjs/redux-thunk
  */
 import thunk from 'redux-thunk';
 import rootReducer from './reducers/rootReducer';
 export default function configureStore() {
  return createStore(
   rootReducer,
    applyMiddleware(thunk)
  );
 }
