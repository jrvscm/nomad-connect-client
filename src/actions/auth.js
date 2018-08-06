import jwtDecode from 'jwt-decode';
import {SubmissionError} from 'redux-form';

import {normalizeResponseErrors} from './utils';
import {saveAuthToken, clearAuthToken} from '../local-storage';
import {
	SET_AUTH_TOKEN,
	CLEAR_AUTH,
	AUTH_REQUEST,
	AUTH_SUCCESS,
	AUTH_ERROR
} from './';
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN, authToken
});
export const clearAuth = () => ({
    type: CLEAR_AUTH
});
export const authRequest = () => ({
    type: AUTH_REQUEST
});
export const authSuccess = currentUser => ({
    type: AUTH_SUCCESS, currentUser
});
export const authError = error => ({
    type: AUTH_ERROR, error
});
// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
const storeAuthInfo = (authToken, dispatch) => {
	const decodedToken = jwtDecode(authToken);
	dispatch(setAuthToken(authToken));
	dispatch(authSuccess(decodedToken.user));
	saveAuthToken(authToken);
};

export const login = (username, password) => dispatch => {
	dispatch(authRequest());
	return(
		fetch(`${process.env.REACT_APP_API_BASE_URL}/api/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username,
				password
			})
		})
		//Reject any requests that don't return a 200 status,
		//creating errors that follow a consistent format
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(({authToken}) => storeAuthInfo(authToken, dispatch))
		.catch(err => {
			const {code} = err;
			const message = 
				code === 401 
					? 'Incorrect username or password'
					: 'Unable to login, please try again';
			dispatch(authError(err));
			// Could not authenticate, so return a submission error for redux form
			return Promise.reject(
				new SubmissionError({
					_error: message
				})
			)
		})
	)
}

export const refreshAuthToken = () => (dispatch, getState) => {
	dispatch(authRequest());
	const authToken = getState().auth.authToken;
	return fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/refresh`, {
		method: 'POST',
		headers: {
			//Provide our existing token as credentials to get a new one
			Authorization: `Bearer ${authToken}`
		}
	})
	.then(res => normalizeResponseErrors(res))
	.then(res => res.json())
	.then(({authToken}) => storeAuthInfo(authToken, dispatch))
	.catch(err => {
		//we couldn't get a refresh token because our current credentials
		//are invalid or expired, or something else went wrong, so clear 
		//them and sign us out
		dispatch(authError(err))
		dispatch(clearAuth())
		clearAuthToken(authToken)
	})
}