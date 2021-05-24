import reasearcherAPI from "../apis/ReasearcherAPI";

export const ACTION_TYPES = {
  RESEARCHER_LIST: "RESEARCHER_LIST",
};

export const fetchAllResearchers = () => (dispatch) => {
  reasearcherAPI
    .auth()
    .getAllResearches()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.RESEARCHER_LIST,
        payload: response.data,
      });
    });
};
