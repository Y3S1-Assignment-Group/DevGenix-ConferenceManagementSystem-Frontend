import adminApi from "../apis/AdminAPI";
import editorApi from "../apis/EditorAPI";
import reviewerApi from "../apis/ReviewerAPI";
import presenterApi from "../apis/PresenterAPI";

export const ACTION_TYPES = {
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
  LOGOUT: "LOGOUT",
};

export const adminRegister = (data, OnSuccess, OnFailure) => (dispatch) => {
  adminApi
    .auth()
    .register(data)
    .then((response) => {
      const user = {
        email: data.email,
        token: response.data.token,
      };
      dispatch({
        type: ACTION_TYPES.REGISTER_SUCCESS,
        payload: user,
      });

      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(user));
      }
      OnSuccess();
    })
    .catch(() => {
      dispatch({
        type: ACTION_TYPES.REGISTER_FAIL,
        payload: null,
      });
      OnFailure();
    });
};

export const loginAdmin = (data, OnSuccess, OnFailure) => (dispatch) => {
  reviewerApi
    .auth()
    .login(data)
    .then((response) => {
      const user = {
        email: data.email,
        token: response.data.token,
      };
      console.log(user);
      dispatch({
        type: ACTION_TYPES.LOGIN_SUCCESS,
        payload: user,
      });

      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(user));
      }
      OnSuccess();
    })
    .catch(() => {
      dispatch({
        type: ACTION_TYPES.LOGIN_FAIL,
        payload: null,
      });
      OnFailure();
    });
};

export const editorLogin = (data, OnSuccess, OnFailure) => (dispatch) => {
  editorApi
    .auth()
    .login(data)
    .then((response) => {
      const user = {
        email: data.email,
        token: response.data.token,
      };
      console.log(user);
      dispatch({
        type: ACTION_TYPES.LOGIN_SUCCESS,
        payload: user,
      });

      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(user));
      }
      OnSuccess();
    })
    .catch(() => {
      dispatch({
        type: ACTION_TYPES.LOGIN_FAIL,
        payload: null,
      });
      OnFailure();
    });
};

export const loginReviewer = (data, OnSuccess, OnFailure) => (dispatch) => {
  reviewerApi
    .auth()
    .login(data)
    .then((response) => {
      const user = {
        email: data.email,
        token: response.data.token,
      };
      console.log(user);
      dispatch({
        type: ACTION_TYPES.LOGIN_SUCCESS,
        payload: user,
      });

      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(user));
      }
      OnSuccess();
    })
    .catch(() => {
      dispatch({
        type: ACTION_TYPES.LOGIN_FAIL,
        payload: null,
      });
      OnFailure();
    });
};

export const presenterRegister = (data, OnSuccess, OnFailure) => (dispatch) => {
  presenterApi
    .auth()
    .register(data)
    .then((response) => {
      const user = {
        email: data.email,
        token: response.data.token,
      };
      dispatch({
        type: ACTION_TYPES.REGISTER_SUCCESS,
        payload: user,
      });

      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(user));
      }
      OnSuccess();
    })
    .catch(() => {
      dispatch({
        type: ACTION_TYPES.REGISTER_FAIL,
        payload: null,
      });
      OnFailure();
    });
};

export const presenterLogin = (data, OnSuccess, OnFailure) => (dispatch) => {
  presenterApi
    .auth()
    .login(data)
    .then((response) => {
      const user = {
        email: data.email,
        token: response.data.token,
      };
      dispatch({
        type: ACTION_TYPES.LOGIN_SUCCESS,
        payload: user,
      });

      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(user));
      }
      OnSuccess();
    })
    .catch(() => {
      dispatch({
        type: ACTION_TYPES.LOGIN_FAIL,
        payload: null,
      });
      OnFailure();
    });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("x-auth-token");
  dispatch({
    type: ACTION_TYPES.LOGOUT,
  });
  window.location = "/";
};
