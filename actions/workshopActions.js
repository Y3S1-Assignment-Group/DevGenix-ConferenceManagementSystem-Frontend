import workshopApi from "../apis/WorkshopAPI";

export const ACTION_TYPES = {
  GET_APPROVED_WORKSHOP_LIST: "GET_APPROVED_WORKSHOP_LIST",
  GET_UNAPPROVED_WORKSHOP_LIST: "GET_UNAPPROVED_WORKSHOP_LIST",
  APPROVE_WORKSHOP: "APPROVE_WORKSHOP",
  GET_PRESENTER_WORKSHOP: "GET_PRESENTER_WORKSHOP",
};

export const fetchAllApprovedWorkshops = () => (dispatch) => {
  workshopApi
    .auth()
    .getApprovedWorkshops()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GET_APPROVED_WORKSHOP_LIST,
        payload: response.data,
      });
    });
};

export const fetchAllUnapprovedWorkshops = () => (dispatch) => {
  workshopApi
    .auth()
    .getUnapprovedWorkshops()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GET_UNAPPROVED_WORKSHOP_LIST,
        payload: response.data,
      });
    });
};

export const approveWorkshop = (unapprovedWorkshop) => (dispatch) => {
  workshopApi
    .auth()
    .ApproveWorkshops(unapprovedWorkshop)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.APPROVE_WORKSHOP,
        payload: response.data,
      });
    });
};

export const fetchAllWorkshopsByPresenterId = () => (dispatch) => {
  workshopApi
    .auth()
    .getWorkshopsByPresenterId()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GET_PRESENTER_WORKSHOP,
        payload: response.data,
      });
    });
};
