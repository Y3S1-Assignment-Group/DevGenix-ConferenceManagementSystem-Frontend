import reasearchPapersApi from "../apis/ReasearchPapersAPI";

export const ACTION_TYPES = {
  GET_APPROVED_REASEARCHPAPER_LIST: "GET_APPROVED_REASEARCHPAPER_LIST",
  GET_UNAPPROVED_REASEARCHPAPER_LIST: "GET_UNAPPROVED_REASEARCHPAPER_LIST",
  APPROVE_REASEARCHPAPER: "APPROVE_REASEARCHPAPER",
  GET_REASEARCHPAPER_LIST_BY_RESEARCHER:
    "GET_REASEARCHPAPER_LIST_BY_RESEARCHER",
  PAY_RESEARCH_PAPER: "PAY_RESEARCH_PAPER",
};

export const fetchAllApprovedReasearchpapers = () => (dispatch) => {
  reasearchPapersApi
    .auth()
    .getApprovedReasearchPapers()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GET_APPROVED_REASEARCHPAPER_LIST,
        payload: response.data,
      });
    });
};

export const fetchAllUnapprovedReasearchpapers = () => (dispatch) => {
  reasearchPapersApi
    .auth()
    .getUnapprovedReasearchPapers()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GET_UNAPPROVED_REASEARCHPAPER_LIST,
        payload: response.data,
      });
    });
};

export const approveReasearchPapers =
  (unapprovedReasearchpaper) => (dispatch) => {
    reasearchPapersApi
      .auth()
      .ApproveReasearchPapers(unapprovedReasearchpaper)
      .then((response) => {
        dispatch({
          type: ACTION_TYPES.APPROVE_REASEARCHPAPER,
          payload: response.data,
        });
      });
  };

export const payResearchPaper =
  (PayStatus, OnSuccess, OnFailure) => (dispatch) => {
    reasearchPapersApi
      .auth()
      .payResearchPaper(PayStatus)
      .then((response) => {
        dispatch({
          type: ACTION_TYPES.PAY_RESEARCH_PAPER,
          payload: response.data,
        });
        OnSuccess();
      })
      .catch(() => {
        OnFailure();
      });
  };

export const fetchResearchPapersByResearcher = () => (dispatch) => {
  reasearchPapersApi
    .auth()
    .getResearchPapersByResearcher()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GET_REASEARCHPAPER_LIST_BY_RESEARCHER,
        payload: response.data,
      });
    });
};
