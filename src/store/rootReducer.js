import { combineReducers } from "redux";
import { CommonReducer } from "./commonReducers";

const appReducer = combineReducers({
  common: CommonReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
