import React from 'react';
import glamorous from 'glamorous';

import Notifications from './Notifications';
import Search from './Search';

const TopNav = () => (
	<Container>
		<Wrapper>
			<Search />
			<Notifications />
		</Wrapper>
	</Container>
)

export default TopNav;

const Container = glamorous.div({
	height: 50,
	width: `100%`,
	backgroundColor: `#4267b2`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justfyContent: `center`,
})

const Wrapper = glamorous.div({
	height: 50,
	width: `100%`,
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `space-around`,
	maxWidth: `1200px`
})