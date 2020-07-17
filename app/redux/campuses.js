import axios from 'axios';

// action type
const SET_CAMPUSES = 'SET_CAMPUSES';

// action creator
export const setCampuses = (campuses) => ({
  type: SET_CAMPUSES,
  campuses
});

// thunk creator
export const fetchCampuses = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/campuses');
      const { data } = response;
      /* because the response has
       * status, data, headers and config */
      dispatch(setCampuses(data));
    } catch (error) {
      console.error(error);
    }
  }
};

let initialState = [];
// Take a look at app/redux/index.js
// to see where this reducer is
// added to the Redux store with combineReducers
export default function campusesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses;
    default:
      return state;
  }
}
