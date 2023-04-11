const screenReducer = (state = {}, action) => {
  switch (action.type) {
    case "SCREEN_RESIZE":
      const { screenWidth } = action;
      return { ...state, screenWidth };
    default:
      return state;
  }
};

export default screenReducer;