import React, { Component } from 'react';
import glamorous from 'glamorous';

import colors from '../../colors';

//TODO: Check for possible memory leak with the event listener function ref

class DeviceSizer extends Component { 
	componentDidMount() {
		const { updateViewportWidth } = this.props;	
			updateViewportWidth(window.innerWidth);
			window.addEventListener("resize", () => updateViewportWidth(window.innerWidth))
	}

	componentWillUnmount() {
		const { updateViewportWidth } = this.props;
			window.removeEventListener("resize", () => updateViewportWidth(window.innerWidth))
	}

	render(){
		const { updateViewportWidth, viewportWidth } = this.props;
		return(
			null	
		)
	}
}

export default DeviceSizer;
