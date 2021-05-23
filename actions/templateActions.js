import templateApi from "../apis/TemplateAPI";

export const ACTION_TYPES = {
    ADD_TEMPLATE: "ADD_TEMPLATE",
  };

export const addTemplate = (data, OnSuccess, OnFailure) => (dispatch) => {
    console.log(data);
    templateApi
      .auth()
      .addTemplate(data)
      .then((response) => {
  
        dispatch({
          type: ACTION_TYPES.ADD_TEMPLATE,
          payload: response.data,
        });
        OnSuccess();
      })
      .catch(() => {
        OnFailure();
      });
  };