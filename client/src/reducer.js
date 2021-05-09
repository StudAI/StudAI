import { combineReducers } from "redux";
import userReducer from "./reducers/userSlice";
import matchReducer from "./reducers/matchSlice";

const rootReducer = combineReducers({
  user: userReducer,
  match: matchReducer,
});

export default rootReducer;
