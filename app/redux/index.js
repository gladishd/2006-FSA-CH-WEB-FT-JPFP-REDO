import { combineReducers } from 'redux'
import campusesReducer from './campuses'
import studentsReducer from './students'
import singleCampusReducer from './singleCampus'
import singleStudentReducer from './singleStudent'

const appReducer = combineReducers({
  campuses: campusesReducer,
  singleCampus: singleCampusReducer,
  students: studentsReducer,
  singleStudent: singleStudentReducer
})

export default appReducer
