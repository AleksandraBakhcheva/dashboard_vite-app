import { combineReducers } from "redux";
import { positionReducer } from "./positions/positionReducer.js";
import { filterReducer } from "./filters/filterReducer.js";

export const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filterReducer,
});
