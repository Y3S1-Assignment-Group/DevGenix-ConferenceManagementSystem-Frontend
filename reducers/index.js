import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { editorReducer } from "./editorReducer";
import { reviewerReducer } from "./reviewerReducer";

export const reducers = combineReducers({
  authReducer,
  editorReducer,
  reviewerReducer,
});
