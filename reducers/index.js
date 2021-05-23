import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { editorReducer } from "./editorReducer";
import { reviewerReducer } from "./reviewerReducer";
import { workshopReducer } from "./workshopReducer";

export const reducers = combineReducers({
  authReducer,
  editorReducer,
  reviewerReducer,
  workshopReducer,
});
