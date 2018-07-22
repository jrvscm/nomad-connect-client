import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Icon } from 'react-icons-kit';
import { navicon } from 'react-icons-kit/fa/navicon';

import colors from '../../colors';
import NavLink from './NavLink';
//TODO: Check for possible memory leak with the event listener function ref

class NavBar extends Component { 
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
			<Container>
				<Row>
				</Row>
			</Container>			
		)
	}
}

export default NavBar;

const Container = glamorous.div({
	width: `100vw`,
	position: `fixed`,
	top: 0,
	backgroundColor: colors.transparent,
	//WebkitBoxShadow: `0px 2px 5px 0px rgba(0,0,0,0.75)`,
	//MozBoxShadow: `0px 2px 5px 0px rgba(0,0,0,0.75)`,
	//boxShadow: `0px 2px 5px 0px rgba(0,0,0,0.75)`,
})

const Row = glamorous.div({
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `flex-end`,
	paddingRight: 25
})