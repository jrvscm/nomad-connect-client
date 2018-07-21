import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import navbar from './navbar';

const rootReducer = combineReducers({
  form: formReducer,
  navbar
});


export default rootReducer;
