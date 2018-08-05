import { SubmissionError } from 'redux-form';

import { normalizeResponseErrors } from './utils';

export const registerUser = user => dispatch => {
	return fetch(`${process.env.REACT_APP_API_BASE_URL}/api/users/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	})
	.then(res => normalizeResponseErrors(res))
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => {
		const { reason, message, location } = err;
		if(reason === 'ValidationError') {
			//Convert ValidationErrors into SubmissionErrors for Redux Form
			return Promise.reject(
				new SubmissionError({
					[location]: message
				})
			)
		}
	})
}