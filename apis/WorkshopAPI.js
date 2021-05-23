import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const workshopApi = {
  auth() {
    return {
      getApprovedWorkshops: () =>
        axios.get(baseUrl + "/api/Workshops/approved"),
    };
  },
};
export default workshopApi;
