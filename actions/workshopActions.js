import workshopApi from "../apis/WorkshopAPI";

export const ACTION_TYPES = {
  APPROVED_WORKSHOP_LIST: "EDITOR_APPROVED_WORKSHOP_LIST",
};

export const fetchAllApprovedWorkshops = () => (dispatch) => {
  workshopApi
    .auth()
    .getApprovedWorkshops()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.APPROVED_WORKSHOP_LIST,
        payload: response.data,
      });
    })
    .catch(() => {});
};
