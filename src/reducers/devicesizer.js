import {UPDATE_VIEWPORT_WIDTH} from '../actions';

const INITIAL_STATE = {
	viewportWidth: null
};

function devicesizer(state = INITIAL_STATE, action) {
  switch(action.type) {
  	case UPDATE_VIEWPORT_WIDTH: 
  		return {
  			...state, 
  			viewportWidth: action.viewportWidth
  		}
    default:
      return state;
  }
}

export default devicesizer;