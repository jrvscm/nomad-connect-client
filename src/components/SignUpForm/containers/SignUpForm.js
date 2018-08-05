import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { focus } from 'redux-form';
import {registerUser} from '../../../actions/users.js';
import {login} from '../../../actions/auth.js';

import SignUpForm from '../SignUpForm';

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = {
	registerUser,
	login
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);