import { combineReducers } from 'redux'
import campusesReducer from './campuses'
import studentsReducer from './students'
import singleCampusReducer from './singleCampus'

const appReducer = combineReducers({
  campuses: campusesReducer,
  singleCampus: singleCampusReducer,
  students: studentsReducer
})

export default appReducer
