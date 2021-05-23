import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const attendeeApi = {
    auth() {
        return {
            register: (newAttendee) =>
            axios.post(baseUrl + "/api/authAttendee/register", newAttendee),
            login: (loginAttendee) => axios.post(baseUrl + "/api/authAttendee", loginAttendee)
        };    
    },
};

export default attendeeApi;