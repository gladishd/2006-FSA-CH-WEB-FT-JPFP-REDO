import axios from 'axios'; // imports

// action type
const SET_STUDENTS = 'SET_STUDENTS';

// action creator
export const setStudents = (students) => ({
  type: SET_STUDENTS,
  students
})

// thunk creator
export const fetchStudents = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/api/students');
      const { data } = response;
      dispatch(setStudents(data));
    } catch (error) {
      console.error(error)
      next(error);
    }
  }
};

let initialState = [];
// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function studentsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;
    default:
      return state;
  }
}
