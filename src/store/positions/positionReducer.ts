import { ADD_POSITIONS } from "./positionActions.js";

export const positionReducer = (
  state: string[] = [],
  action: { type: string; positions: string[] }
) => {
  switch (action.type) {
    case ADD_POSITIONS:
      return action.positions;
    default:
      return state;
  }
};
