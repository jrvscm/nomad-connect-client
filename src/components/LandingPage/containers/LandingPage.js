import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import LandingPage from '../LandingPage';

const mapStateToProps = (state) => ({
	viewportWidth: state.devicesizer.viewportWidth,
	loggedIn: state.auth.currentUser !== null
})
const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);