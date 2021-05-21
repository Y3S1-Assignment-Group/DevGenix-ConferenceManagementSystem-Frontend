import editorApi from "../apis/EditorAPI";

export const ACTION_TYPES = {
  EDITOR_LIST: "EDITOR_LIST",
};

export const fetchAllEditors = () => (dispatch) => {
  editorApi
    .auth()
    .getAllEditors()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.EDITOR_LIST,
        payload: response.data,
      });
    })
    .catch(() => {});
};
