export const ADD_POSITIONS = "ADD_POSITIONS";

export const addPositions = (positions: object[]) => ({
  type: ADD_POSITIONS,
  positions,
});
