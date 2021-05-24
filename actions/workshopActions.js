import workshopApi from "../apis/WorkshopAPI";

export const ACTION_TYPES = {
  GET_APPROVED_WORKSHOP_LIST: "GET_APPROVED_WORKSHOP_LIST",
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
