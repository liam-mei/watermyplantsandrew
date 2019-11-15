import * as actions from "../actions";

const initalState = {
  errorMessage: ""
};

export const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        errorMessage: ""
      };

    case actions.LOGIN_SUCCESS:
      return {
        ...state
      };

    case actions.LOGIN_FAILURE:
      return {
        ...state,
        errorMessage: action.errorMessage
      };

    case actions.REGISTER_REQUEST:
      return {
        ...state,
        errorMessage: ""
      };

    case actions.REGISTER_SUCCESS:
      return {
        ...state
      };

    case actions.REGISTER_FAILURE:
      return {
        ...state,
        errorMessage: action.errorMessage
      };

    default:
      return state;
  }
};
