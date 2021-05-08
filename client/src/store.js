import { createStore } from "redux";
import rootReducer from "./reducer";

let preloadedState = {};
if (process.env.NODE_ENV === "development") {
  preloadedState =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true });
}

const store = createStore(rootReducer, preloadedState);

export default store;
