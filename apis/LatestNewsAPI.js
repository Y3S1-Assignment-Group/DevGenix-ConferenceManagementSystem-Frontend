import axios from "axios";
import authHeader from "./authHeader";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const config = {
  headers: authHeader(),
};

const newsApi = {
  latestNews() {
    return {
      addLatestNews: (newNews) =>
        axios.post(baseUrl + "/api/LatestNews", newNews, config),
      getAllNews: () => axios.get(baseUrl + "/api/LatestNews"),
      getAllApprovedNews: () => axios.get(baseUrl + "/api/LatestNews/approved"),
      getAllUnapprovedNews: () =>
        axios.get(baseUrl + "/api/LatestNews/unapproved", config),
      approveNews: (id, newObj) =>
        axios.get(
          baseUrl + "/api/LatestNews/approveLatestNews/" + id,
          newObj,
          config
        ),
      deleteNews: (deletedNews) => {
        console.log("delete news", deletedNews);
        console.log("config", config);
        axios.delete(baseUrl + "/api/LatestNews", deletedNews, config);
      },
    };
  },
};

export default newsApi;
