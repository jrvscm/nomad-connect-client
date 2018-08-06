import { 
	SET_AUTH_TOKEN,
	CLEAR_AUTH,
	AUTH_REQUEST,
	AUTH_SUCCESS,
	AUTH_ERROR
} from '../actions';

const INITIAL_STATE = {
	authToken: null, //authToken !== null does not mean it has been validated yet
	currentUser: null,
	loading: false,
	error: null
}

function auth(state = INITIAL_STATE, action) {
	switch(action.type) {
	  case SET_AUTH_TOKEN:
	  return {
	  	...state,
	  	authToken: action.authToken
	  }
	  case CLEAR_AUTH:
	  return {
	  	...state,
	  	authToken: null,
	  	currentUser: null
	  }
	  case AUTH_REQUEST:
	  return {
	  	...state,
	  	loading: true,
	  	error: null
	  }
	  case AUTH_SUCCESS:
	  return {
	  	...state,
	  	loading: false,
	  	currentUser: action.currentUser
	  }
	  case AUTH_ERROR:
	  return {
	  	loading: false,
	  	error: action.error
	  }
	  default:
	  	return state;
	}
}

export default auth;

