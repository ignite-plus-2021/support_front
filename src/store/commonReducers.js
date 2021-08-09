let initialState = {
  loggedInUserName: "",
};

export function CommonReducer(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case "SET_USERNAME":
      return Object.assign({}, state, {
        loggedInUserName: data,
      });

    default:
      return state;
  }
}
