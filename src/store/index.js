import { createStore, applyMiddleware } from 'redux';
import { merge } from 'lodash';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// https://medium.com/@zalmoxis/using-redux-devtools-in-production-4c5b56c5600f
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
);

export default store;
