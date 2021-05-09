const initialState = {
  name: "",
  email: "",
  loggedIn: false,
  token: localStorage.getItem("token") || "",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/addUser": {
      return {
        ...state,
        name: action.payload.name,
        token: action.payload.token,
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
