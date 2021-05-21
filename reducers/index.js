import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { editorReducer } from "./editorReducer";

export const reducers = combineReducers({
  authReducer,
  editorReducer,
});
