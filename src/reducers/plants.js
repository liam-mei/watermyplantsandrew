import * as actions from "../actions";

const initialState = {
  plantList: [],
  currentPlant: {
    id: undefined,
    name: "",
    location: "",
    type: "",
    water_schedule: "",
    user_id: undefined
  },
  isFetchingPlants: false,
  isFetchingPlant: false,
  errorMessage: ""
};

export const plantReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_PLANTS_REQUEST:
      return {
        ...state,
        plantList: [],
        isFetchingPlants: true
      };

    case actions.FETCH_PLANTS_SUCCESS:
      return {
        ...state,
        plantList: action.plantList,
        isFetchingPlants: false
      };

    case actions.FETCH_PLANTS_FAILURE:
      return {
        ...state,
        isFetchingPlants: false,
        errorMessage: action.errorMessage
      };

    case actions.FETCH_PLANT_REQUEST:
      return { ...state, isFetchingPlant: true };

    case actions.FETCH_PLANT_SUCCESS:
      return {
        ...state,
        isFetchingPlant: false,
        currentPlant: action.currentPlant
      };

    case actions.FETCH_PLANT_FAILURE:
      return {
        ...state,
        isFetchingPlant: false,
        errorMessage: action.errorMessage
      };

    case actions.CREATE_PLANT_REQUEST:
      return { ...state };

    case actions.CREATE_PLANT_SUCCESS:
      return { ...state };

    case actions.CREATE_PLANT_FAILURE:
      return { ...state, errorMessage: action.errorMessage };

    case actions.DELETE_PLANT_REQUEST:
      return { ...state };

    case actions.DELETE_PLANT_SUCCESS:
      return { ...state };

    case actions.DELETE_PLANT_FAILURE:
      return { ...state, errorMessage: action.errorMessage };

    default:
      return state;
  }
};
