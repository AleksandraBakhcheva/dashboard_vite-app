import { combineReducers, Reducer } from "redux";
import { positionReducer } from "./positions/positionReducer.js";
import { filterReducer } from "./filters/filterReducer.js";

export const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filterReducer,
}) as Reducer<
  Partial<{ positions: string[]; filters: string[] }>,
  { type: string; positions: string[] } | { type: string; filter: string }
>;
