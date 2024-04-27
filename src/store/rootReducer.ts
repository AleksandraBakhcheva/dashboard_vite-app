import { combineReducers } from "redux";
import { positionReducer } from "./positions/positionReducer.js";

export const rootReducer = combineReducers({ positions: positionReducer });
