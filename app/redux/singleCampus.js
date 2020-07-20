import axios from 'axios';

// action types
const SET_SPECIFIC_CAMPUS = 'SET_SPECIFIC_CAMPUS';
const ADD_NEW_CAMPUS = 'ADD_NEW_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const UPDATE_STUDENT = 'UPDATE_STUDENT';

// action creators
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
export const updateCampus = (campusId, updatedCampus) => ({
  type: UPDATE_CAMPUS,
  campusId,
  updatedCampus
})

// thunk creators
export const fetchSingleCampus = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/campuses/${id}`);
      const { data } = response;
      dispatch(setSpecificCampus(data));
    } catch (error) {
      // we're not using Express, so don't use next
      console.error(error); // console.dir
    } // same as console.log except the output is set to std.err instead of std.out; internal-based
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
      console.error(error);
    }
  }
}
export const removeCampusThunk = (campusId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/campuses/${campusId}`);
      dispatch(removeCampus(campusId));
    } catch (error) {
      console.error(error);
    }
  }
}
export const updateCampusThunk = (updatedCampus) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`/api/campuses/${updatedCampus.id}`, updatedCampus)
      const { data } = response;
      dispatch(updateCampus(data));
    } catch (error) {
      console.error(error);
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
    case UPDATE_CAMPUS:
      return action.updatedCampus;
    case UPDATE_STUDENT:
      const indexOfCurrentStudent = state.students.findIndex(element => element.id === action.updatedStudent.id);
      return {
        ...state.students[indexOfCurrentStudent],
        ...action.updatedStudent
      };
    default:
      return state;
  }
}
