const initialState = {
  userID: null,
  userName: null,
  loggedIn: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/addUser": {
      return {
        ...state,
        userID: action.payload.userID,
        userName: action.payload.userName,
        loggedIn: true,
      };
    }
    case "user/clearUser": {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
}
