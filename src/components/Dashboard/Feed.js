import React from 'react';
import glamorous from 'glamorous';

const Feed = () => (
	<Container>
		<div style={{height: 300, width: `100%`, backgroundColor: `rgba(0,0,0,.1)`, margin: 5}} />
		<div style={{height: 300, width: `100%`, backgroundColor: `rgba(0,0,0,.1)`, margin: 5}} />
		<div style={{height: 300, width: `100%`, backgroundColor: `rgba(0,0,0,.1)`, margin: 5}} />
		<div style={{height: 300, width: `100%`, backgroundColor: `rgba(0,0,0,.1)`, margin: 5}} />
		<div style={{height: 300, width: `100%`, backgroundColor: `rgba(0,0,0,.1)`, margin: 5}} />
		<div style={{height: 300, width: `100%`, backgroundColor: `rgba(0,0,0,.1)`, margin: 5}} />
	</Container>
)

export default Feed;

const Container = glamorous.div({
	boxSizing: `border-box`,
	height: `100%`,
	width: `650`,
	backgroundColor: `rgba(0,0,0,.2)`,
	overflowY: `scroll`,
	overflowX: `hidden`
})