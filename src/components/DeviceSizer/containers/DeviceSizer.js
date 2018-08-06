import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import {updateViewportWidth} from '../../../actions/devicesizer';

import DeviceSizer from '../DeviceSizer';

const mapStateToProps = (state) => ({
	viewportWidth: state.devicesizer.viewportWidth
})
const mapDispatchToProps = {
	updateViewportWidth
};
export default connect(mapStateToProps, mapDispatchToProps)(DeviceSizer);