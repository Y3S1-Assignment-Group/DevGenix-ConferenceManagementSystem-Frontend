import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const authPresenterApi = {
  auth() {
    return {
      register: (newPresenter) =>
        axios.post(baseUrl + "/api/authPresenter/register", newPresenter),
      login: (loginPresenter) =>
        axios.post(baseUrl + "/api/authPresenter/login", loginPresenter),
    };
  },
};
export default authPresenterApi;
