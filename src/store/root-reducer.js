import { combineReducers } from "redux";
import { useReducer } from "./user/user.reducer";

export const rooReducer = combineReducers({
  user: useReducer,
});
