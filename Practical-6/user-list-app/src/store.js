import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducer';

const store = createStore ( 
  rootReducer,  
  composeWithDevTools(applyMiddleware(logger, thunk))
) 

export default store;