import axios from 'axios';

// action type
const SET_STUDENT = 'SET_STUDENT';
const ADD_NEW_STUDENT = 'ADD_NEW_STUDENT';

// action creator
export const getStudent = (student) => ({
  type: SET_STUDENT,
  student
})
export const addNewStudent = (student) => ({
  type: ADD_NEW_STUDENT,
  student
})

// thunk creator
export const fetchSingleStudent = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/api/students/${id}`);
      const { data } = response;
      dispatch(getStudent(data));
    } catch (error) {
      // next(error);
    }
  }
}
export const postNewStudent = (studentObject) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/students', studentObject);
      const { data } = response;
      dispatch(addNewStudent(data));
    } catch (error) {

    }
  }
}

let initialState = {};

/* So once the JSON thing is returned
{id: 2, firstName: "FullStack's second", lastName: "snoo", email: "snoo2@fullstk.com", imageUrl: "https://www.irvingisd.net/cms/lib/TX01917973/Centr…6667/StudentPageIcons_Artboard%205%20copy%204.png", …}
We're going to be able to */

export default function singleStudentReducer(state = initialState, action) {
  switch (action.type) {
    case SET_STUDENT:
      return action.student;
    case ADD_NEW_STUDENT:
      return action.student;
    default:
      return state;
  }
}
