const initialState = {
  type: "",
};

export default function matchReducer(state = initialState, action) {
  switch (action.type) {
    case "match/setType": {
      return {
        ...state,
        type: action.payload,
      };
    }

    default:
      return state;
  }
}
