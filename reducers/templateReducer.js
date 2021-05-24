import { ACTION_TYPES } from "../actions/editorActions";

const initialState = {
    templates: [],
};

export const templateReducer = (state = initialState, action) => {
    switch (action.type) {
      case ACTION_TYPES.ADD_TEMPLATE:
        return {
          ...state,
          templates: [...action.payload],
        };
      default:
        return state;
    }
  };



