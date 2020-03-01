import {combineReducers} from 'redux';
import LoginReducer from './loginReducer';
import numberReducer from './numberReducer';

export default combineReducers({
  LoginReducer:LoginReducer,
  numberReducer:numberReducer
})