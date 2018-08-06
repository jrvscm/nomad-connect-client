import React from 'react';
import glamorous from 'glamorous';

const Aside = ({viewportWidth}) => (
	<Container logger={console.log(viewportWidth)} />
)

export default Aside;

const Container = glamorous.div({
	backgroundColor: `grey`,
	height: `100vh`,
	minWidth: 315,
	position: `fixed`,
	left: 0,
	top: 0,
	bottom: 0
})