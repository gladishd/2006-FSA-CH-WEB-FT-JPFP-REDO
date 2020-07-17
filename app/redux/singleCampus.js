import axios from 'axios';

// action type
const SET_SPECIFIC_CAMPUS = 'SET_SPECIFIC_CAMPUS';
const ADD_NEW_CAMPUS = 'ADD_NEW_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';

// action creator
export const setSpecificCampus = (campus) => ({
  type: SET_SPECIFIC_CAMPUS,
  campus
})
export const addNewCampus = (campus) => ({
  type: ADD_NEW_CAMPUS,
  campus
})
export const removeCampus = (campusId) => ({
  type: REMOVE_CAMPUS,
  campusId
})

// thunk creator
export const fetchSingleCampus = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/campuses/${id}`);
      const { data } = response;
      dispatch(setSpecificCampus(data));
    } catch (error) {
      // next(error);
    }
  }
}
export const postNewCampus = (campusObject) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`/api/campuses`, campusObject);
      const { data } = response;
      // This goes back and notifies the server that some kind of
      // axios.post request has already modified the database,
      // and it's notifying the server.
      dispatch(addNewCampus(data));
    } catch (error) {
    }
  }
}
export const removeCampusThunk = (campusId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/campuses/${campusId}`);
      dispatch(removeCampus(campusId));
      console.log('you clicked the x')
    } catch (error) {

    }
  }
}

let initialState = {};

export default function singleCampusReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SPECIFIC_CAMPUS:
      return action.campus;
    case ADD_NEW_CAMPUS:
      return action.campus;
    case REMOVE_CAMPUS:
      return action.campusId;
    default:
      return state;
  }
}
