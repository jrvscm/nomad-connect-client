import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import devicesizer from './devicesizer';
import auth from './auth';

const rootReducer = combineReducers({
  form: formReducer,
  devicesizer,
  auth
});


export default rootReducer;
