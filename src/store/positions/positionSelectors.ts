export const selectAllPositions = (state: { positions: object[] }) =>
  state.positions;

export const selectVisiblePositions = (
  state: {
    positions: {
      role: string;
      level: string;
      languages: string[];
      tools: string[];
    }[];
  },
  filters = []
) => {
  if (filters.length === 0) return state.positions;

  return state.positions.filter((position) => {
    const positionFilters = [
      position.role,
      position.level,
      ...position.languages,
      ...position.tools,
    ];

    return filters.every((filter) => positionFilters.includes(filter));
  });
};
