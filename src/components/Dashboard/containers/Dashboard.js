import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import Dashboard from '../Dashboard';

const mapStateToProps = (state) => ({
	viewportWidth: state.devicesizer.viewportWidth
})
const mapDispatchToProps = {
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);