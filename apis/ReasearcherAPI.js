import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const authReasearcherApi = {
    auth() {
        return {
            register: (newReasearcher) =>
                axios.post(baseUrl + "/api/authResearcher/register", newReasearcher),
            login: (loginReasearcher) =>
                axios.post(baseUrl + "/api/authResearcher", loginReasearcher),
        };
    },
};
export default authReasearcherApi;
