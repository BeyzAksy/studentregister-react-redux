import { combineReducers } from 'redux';
import kimlikdogrulamaReducer from './KimlikdogrulamaReducer';
import StudentsListReducer from './StudentsListReducer';

export default combineReducers({
  kimlikdogrulamaResponse: kimlikdogrulamaReducer,
  studentsListResponse: StudentsListReducer
});
