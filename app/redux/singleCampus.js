import axios from 'axios';

// action type
const SET_SPECIFIC_CAMPUS = 'SET_SPECIFIC_CAMPUS';

// action creator
export const setSpecificCampus = (campus) => ({
  type: SET_SPECIFIC_CAMPUS,
  campus
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

let initialState = {};

export default function singleCampusReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SPECIFIC_CAMPUS:
      return action.campus;
    default:
      return state;
  }
}
