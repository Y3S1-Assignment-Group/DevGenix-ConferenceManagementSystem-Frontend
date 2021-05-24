import { ACTION_TYPES } from "../actions/researcherActions";

const initialState = {
  researcherList: [],
  researcherListPending: true,
};

export const researcherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.RESEARCHER_LIST:
      return {
        ...state,
        researcherList: [...action.payload],
        researcherListPending: false,
      };
    default:
      return state;
  }
};
