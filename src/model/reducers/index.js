import {combineReducers} from 'redux';
import LoginReducer from './loginReducer';
import numberReducer from './numberReducer';
import testReducer from './testReducer';

export default combineReducers({
  LoginReducer:LoginReducer,
  numberReducer:numberReducer,
  testReducer:testReducer
})