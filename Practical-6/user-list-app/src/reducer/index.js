import { combineReducers } from 'redux';

import userListReducer from "./userListReducer";
import screenReducer from "./screenReducer";

const rootReducer = combineReducers({
  userListReducer: userListReducer,
  screenReducer: screenReducer
})

export default rootReducer;