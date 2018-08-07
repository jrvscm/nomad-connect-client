import React from 'react';
import glamorous from 'glamorous';
import { Icon } from 'react-icons-kit';

import {gear} from 'react-icons-kit/fa/gear'
import {glass} from 'react-icons-kit/fa/glass'
import {user} from 'react-icons-kit/fa/user'
import {flask} from 'react-icons-kit/fa/flask'

const Notifications = () => (
	<Container>
		<Avatar />
		<GlamorousIcon icon={glass} size={30} />
		<GlamorousIcon icon={gear} size={30} />
		<GlamorousIcon icon={user} size={30} />
		<GlamorousIcon icon={flask} size={30} />
	</Container>
)

export default Notifications;

const Container = glamorous.div({
	height: `100%`,
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `center`,
	marginLeft: 200
})

const GlamorousIcon = glamorous(Icon)({
	cursor: `pointer`,
	color: `#fff`,
	margin: `0, 2.5px`,
	transition: `all .2s ease`,
	'&:hover': {
		color: `rgba(0,0,0,.5)`
	}
})

const Avatar = glamorous.div({
	height: 32,
	width: 32,
	cursor: `pointer`,
	transition: `all .2s ease`,
	marginRight: 50,
	borderRadius: `50%`,
	border: `2px solid #fff`,
	backgroundImage: `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1150197/profile-photo.jpg)`,
	backgroundSize: `cover`,
	backgroundPosition: `center center`,
	backgroundRepeat: `no-repeat`,
	'&:hover':{
		border: `2px solid rgba(0,0,0,.5)`
	}
})
