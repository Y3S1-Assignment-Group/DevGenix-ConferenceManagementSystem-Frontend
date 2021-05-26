import { ACTION_TYPES } from "../actions/templateActions";

const initialState = {
    templates: [],
};

export const templateReducer = (state = initialState, action) => {
    switch (action.type) {
      case ACTION_TYPES.ADD_TEMPLATE:
        return {
          ...state,
          templates: [...state.templates, action.payload],
        };
      case ACTION_TYPES.GET_ALL_TEMPLATES:
          return {
            ...state,
            templates: [...action.payload],
        };
        case ACTION_TYPES.DELETE_TEMPLATE:
          return {
            ...state,
              templates: state.templates.filter(
              (x) => x._id != action.payload.id
            ),
          };
      default:
        return state;
    }
  };



