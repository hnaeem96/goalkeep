import { combineReducers } from 'redux';
import user from './userReducer';
import goals from './goalsReducer';

export default combineReducers({
  user,
  goals
});
