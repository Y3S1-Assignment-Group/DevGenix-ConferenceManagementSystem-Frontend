import { ACTION_TYPES } from "../actions/workshopActions";

const initialState = {
  approvedWorkshopList: [],
  approvedWorkshopListPending: true,
};

export const workshopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.APPROVED_WORKSHOP_LIST:
      return {
        ...state,
        approvedWorkshopList: [...action.payload],
        approvedWorkshopListPending: false,
      };
    default:
      return state;
  }
};
