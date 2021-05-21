import { ACTION_TYPES } from "../actions/editorActions";

const initialState = {
  editorList: [],
  editorListPending: true,
};

export const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.EDITOR_LIST:
      return {
        ...state,
        editorList: [...action.payload],
        itemListPending: false,
      };
    default:
      return state;
  }
};
