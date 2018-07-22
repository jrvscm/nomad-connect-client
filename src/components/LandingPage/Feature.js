import React from 'react';
import glamorous from 'glamorous';

const Feature = () => (
	<Container>
		<Circle />
		<h2>BIG HEADLINE</h2>
		<p>Lorem ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
	</Container>
)

export default Feature;

const Container = glamorous.div({
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`,
	width: `25%`,
	borderRadius: 3,
	margin: 20,
	padding: 25
})

const Circle = glamorous.div({
	height: 100,
	width: 100,
	border: `1px solid green`,
	borderRadius: `50%`,
	marginBottom: 25
})