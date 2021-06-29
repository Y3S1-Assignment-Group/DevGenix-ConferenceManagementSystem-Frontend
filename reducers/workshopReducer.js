import { ACTION_TYPES } from "../actions/workshopActions";

const initialState = {
  presenterWorkshop: null,
  approvedWorkshopList: [],
  upapprovedWorkshopList: [],
  approvedWorkshopListPending: true,
  unapprovedWorkshopListPending: true,
};

export const workshopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_APPROVED_WORKSHOP_LIST:
      return {
        ...state,
        approvedWorkshopList: [...action.payload],
        approvedWorkshopListPending: false,
      };
    case ACTION_TYPES.GET_UNAPPROVED_WORKSHOP_LIST:
      return {
        ...state,
        upapprovedWorkshopList: [...action.payload],
        unapprovedWorkshopListPending: false,
      };
    case ACTION_TYPES.APPROVE_WORKSHOP:
      return {
        ...state,
        approvedWorkshopList: [...state.approvedWorkshopList, action.payload],
        upapprovedWorkshopList: state.upapprovedWorkshopList.filter(
          (x) => x._id !== action.payload._id
        ),
      };
    case ACTION_TYPES.GET_PRESENTER_WORKSHOP:
      return {
        ...state,
        presenterWorkshop: action.payload,
      };
    default:
      return state;
  }
};
