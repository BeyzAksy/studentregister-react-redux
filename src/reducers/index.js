import { combineReducers } from 'redux';
import kimlikdogrulamaReducer from './KimlikdogrulamaReducer';
import StudentsListReducer from './StudentsCreateReducer';
import StudentDataReducer from './StudentDataReducer';
import StudentUpdateReducer from './StudentUpdateReducer';

export default combineReducers({
  kimlikdogrulamaResponse: kimlikdogrulamaReducer,
  studentsListResponse: StudentsListReducer,
  studentDataResponse: StudentDataReducer,
  studentupdateResponse: StudentUpdateReducer,
});
