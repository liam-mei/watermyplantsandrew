import { push } from "connected-react-router";
import API from "../utils/API";

export const FETCH_PLANTS_REQUEST = "FETCH_PLANTS_REQUEST";
export const FETCH_PLANTS_SUCCESS = "FETCH_PLANTS_SUCCESS";
export const FETCH_PLANTS_FAILURE = "FETCH_PLANTS_FAILURE";

export const getPlants = () => dispatch => {
  dispatch({ type: FETCH_PLANTS_REQUEST });

  API().get(`/dashboard/${localStorage.getItem("userID")}`)
    .then(response => {
      console.log(response.data)
      dispatch({
        type: FETCH_PLANTS_SUCCESS,
        payload: response.data
      });
    })
    .catch(error =>
      dispatch({
        type: FETCH_PLANTS_FAILURE,
        errorMessage: error
      })
    );
};

export const FETCH_PLANT_REQUEST = "FETCH_PLANT_REQUEST";
export const FETCH_PLANT_SUCCESS = "FETCH_PLANT_SUCCESS";
export const FETCH_PLANT_FAILURE = "FETCH_PLANT_FAILURE";

export const getPlant = id => dispatch => {
  dispatch({ type: FETCH_PLANT_REQUEST });

  API.get(`/plants/${id}`)
    .then(response =>
      dispatch({
        type: FETCH_PLANT_SUCCESS,
        currentPlant: response.data.plant
      })
    )
    .catch(error => {
      dispatch({
        type: FETCH_PLANTS_FAILURE,
        errorMessage: error.response.data.message
      });
    });
};

export const CREATE_PLANT_REQUEST = "CREATE_PLANT_REQUEST";
export const CREATE_PLANT_SUCCESS = "CREATE_PLANT_SUCCESS";
export const CREATE_PLANT_FAILURE = "CREATE_PLANT_FAILURE";

export const createPlant = plant => dispatch => {
  dispatch({ type: CREATE_PLANT_REQUEST });

  API.post("/plants", plant)
    .then(response => {
      // This is required because when you add a new plant, the backend
      // returns a list of the new plants instead of just
      const plant_id = response.data[response.data.length - 1].id;

      dispatch({ type: CREATE_PLANT_SUCCESS, plants: response.data });
      dispatch(push(`/plant/${plant_id}`));
    })
    .catch(error => {
      dispatch({
        type: CREATE_PLANT_FAILURE,
        errorMessage: error.response.data
      });
    });
};

export const DELETE_PLANT_REQUEST = "DELETE_PLANT_REQUEST";
export const DELETE_PLANT_SUCCESS = "DELETE_PLANT_SUCCESS";
export const DELETE_PLANT_FAILURE = "DELETE_PLANT_FAILURE";

export const deletePlant = id => dispatch => {
  dispatch({ type: DELETE_PLANT_REQUEST });

  API.delete(`/plants/${id}`)
    .then(response => {
      dispatch({ type: DELETE_PLANT_SUCCESS });
      dispatch(push("/plants"));
    })
    .catch(error =>
      dispatch({
        type: DELETE_PLANT_FAILURE,
        errorMessage: error.response.data
      })
    );
};
