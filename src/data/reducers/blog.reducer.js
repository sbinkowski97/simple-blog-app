import {
  ARTICLES_GET_REQUEST,
  ARTICLES_GET_SUCCESS,
  ARTICLES_GET_FAILURE,
} from "data/constants";
//ARTICLES_GET_REQUEST
//ARTICLES_GET_SUCESS
//ARTICLES_GET_FAILURE

const initialState = {
  loadingState: null,
  allArticles: {},
  topArticles: {},
  specifiedCategoryArticles: {},
};

const blog = (state = initialState, action) => {
  const newLoadingState = { ...state.loadingState };

  switch (action.type) {
    case ARTICLES_GET_REQUEST:
      return {
        ...state,
        loadingState: {
          ...state.loadingState,
        },
      };
    case ARTICLES_GET_SUCCESS:
      delete newLoadingState.ARTICLES_GET_REQUEST;
      return {
        ...state,
        allArticles: action.payload,
        loadingState: newLoadingState,
      };
    case ARTICLES_GET_FAILURE:
      delete newLoadingState.ARTICLES_GET_REQUEST;
      return {
        ...state,
        allArticles: {},
        loadingState: newLoadingState,
      };
    default:
      return {
        state,
      };
  }
};

export default blog;
