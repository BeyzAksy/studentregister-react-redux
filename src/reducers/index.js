import { combineReducers } from 'redux';
import kimlikdogrulamaReducer from './KimlikdogrulamaReducer';
import StudentsListReducer from './StudentsCreateReducer';
import StudentDataReducer from './StudentDataReducer';

export default combineReducers({
  kimlikdogrulamaResponse: kimlikdogrulamaReducer,
  studentsListResponse: StudentsListReducer,
  studentDataResponse: StudentDataReducer
});
