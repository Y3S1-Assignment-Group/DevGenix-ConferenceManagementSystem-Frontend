import { ACTION_TYPES } from "../actions/attendeeActions";

const initialState = {
  attendeeList: [],
  attendeeListPending: true,
  attendeeDetailsList: [],
};

export const attendeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ATTENDEE_LIST:
      return {
        ...state,
        attendeeList: [...action.payload],
        attendeeListPending: false,
      };
    case ACTION_TYPES.ATTENDEE_DETAILS:
        return {
          ...state,
          attendeeDetailsList: [...action.payload],         
      };
    default:
      return state;
  }
};
