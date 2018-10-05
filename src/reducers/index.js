import { combineReducers } from 'redux';
import kimlikdogrulamaReducer from './KimlikdogrulamaReducer';

export default combineReducers({
  kimlikdogrulamaResponse: kimlikdogrulamaReducer
});
