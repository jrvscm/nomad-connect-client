import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import {updateViewportWidth} from '../../../actions/navbar';

import NavBar from '../NavBar';

const mapStateToProps = (state) => ({
	viewportWidth: state.navbar.viewportWidth
})
const mapDispatchToProps = {
	updateViewportWidth
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);