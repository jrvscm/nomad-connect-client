import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import LandingPage from '../LandingPage';

const mapStateToProps = (state) => ({
	viewportWidth: state.navbar.viewportWidth
})
const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);