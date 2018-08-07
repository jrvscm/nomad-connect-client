import React, { Component } from 'react';
import glamorous from 'glamorous';

import colors from '../../colors';
import TopNav from '../TopNav';
import Aside from './Aside';
import Feed from './Feed';

const Dashboard = () => (
	<MainContainer>
		<TopNav />
		<ContentContainer>
			<Aside />
			<Feed />
		</ContentContainer>
	</MainContainer>
)

export default Dashboard;

const MainContainer = glamorous.div({
	height: `100vh`,
	width: `100vw`,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`
})

const ContentContainer = glamorous.div({
	height: `100%`,
	width: `100%`,
	maxWidth: `1200px`,
	backgroundColor: `#d3d3d3`,
	display: `flex`,
	flexDirection: `row`,
	alignItems: `flex-start`,
	justifyContent: `flex-start`
})