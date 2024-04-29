import { ADD_FILTER, CLEAR_FILTER, REMOVE_FILTER } from "./filterActions.js";

export const filterReducer = (
  state: string[] = [],
  action: { type: string; filter: string }
) => {
  switch (action.type) {
    case ADD_FILTER:
      if (!state.includes(action.filter)) {
        return [...state, action.filter];
      }
      return state;
    case REMOVE_FILTER:
      return state.filter((filter: string) => filter !== action.filter);
    case CLEAR_FILTER:
      return [];
    default:
      return state;
  }
};
