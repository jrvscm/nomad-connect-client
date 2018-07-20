import React from 'react';
import glamorous from 'glamorous';

import colors from '../../colors';
import NavLink from './NavLink';


const NavBar = ({dimensions}) => (
	<Container>
		<Row>
			<NavLink text={'One'} route={'/'} />
			<NavLink text={'Two'} route={'/'} />
			<NavLink text={'Three'} route={'/'} />
		</Row>
	</Container>
)

export default NavBar;

const Container = glamorous.div({
	width: `100vw`,
	position: `absolute`,
	top: 0,
	backgroundColor: colors.white,
	WebkitBoxShadow: `0px 2px 5px 0px rgba(0,0,0,0.75)`,
	MozBoxShadow: `0px 2px 5px 0px rgba(0,0,0,0.75)`,
	boxShadow: `0px 2px 5px 0px rgba(0,0,0,0.75)`,
})

const Row = glamorous.div({
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `flex-end`,
	paddingRight: 25
})
