import { push } from "connected-react-router";
import API from "../utils/API";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export function authenticateUser (userData , props) {

  return dispatch => {
    dispatch({ type: LOGIN_REQUEST });

  API().post("/login", userData)
    .then(response => {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem("userID", response.data.id)
      dispatch({type: LOGIN_SUCCESS})
      dispatch(push("/dashboard"));
    })
    .catch(error =>
      dispatch({
        type: LOGIN_FAILURE,
        payload: error
      })
    );
}};

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const registerUser = (userData) => dispatch => {
  dispatch({ type: REGISTER_REQUEST });

  API().post("/register", userData)
    .then(response => {
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
      dispatch(push("/login"));
    })
    .catch(error =>
      dispatch({
        type: REGISTER_FAILURE,
        errorMessage: error.response.data.message
      })
    );
  // dispatch({type: LOGIN_REQUEST});
  // API().post("/login", {
  //   username: props.
  // })
  //   .then(response => {
  //     dispatch({ type: LOGIN_SUCCESS, payload: response.data });
  //     dispatch(push("/dashboard"));
  //   })
  //   .catch(error =>
  //     dispatch({
  //       type: LOGIN_FAILURE,
  //       payload: error
  //     })
  //   );
};
