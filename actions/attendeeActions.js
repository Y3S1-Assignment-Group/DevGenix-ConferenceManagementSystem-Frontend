import attendeeAPI from "../apis/AttendeeAPI";

export const ACTION_TYPES = {
  ATTENDEE_LIST: "ATTENDEE_LIST",
  ATTENDEE_DETAILS: "ATTENDEE_DETAILS"
};

export const fetchAllAttendees = () => (dispatch) => {
  attendeeAPI
    .auth()
    .getAllAttendees()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ATTENDEE_LIST,
        payload: response.data,
      });
    });
};

export const getAttendeeDetail = () => (dispatch) => {
  attendeeAPI
    .auth()
    .getAttendeeDetails()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ATTENDEE_DETAILS,
        payload: response.data,
      });
    });
};