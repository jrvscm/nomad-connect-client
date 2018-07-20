import React from 'react';
import glamorous from 'glamorous';
import { withRouter } from 'react-router-dom';

import colors from '../../colors';

const NavLink = ({history, route, text}) => (
	<Button onClick={() => history.push(`${route}`)}>
		{text}
	</Button>
)

export default withRouter(NavLink);

const Button = glamorous.button({
	width: 80,
	padding: 10,
	fontSize: 20,
	margin: 10,
	border: `none`,
	backgroundColor: colors.transparent,
	color: colors.black,
	cursor: `pointer`,
	transition: `all .15s ease`,
	'&:hover': {
		backgroundColor: `rgba(0,0,0,.5)`
	}
})