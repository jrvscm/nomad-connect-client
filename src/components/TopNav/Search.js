import React from 'react';
import glamorous from 'glamorous';

const Search = () => (
	<Container>
		<label htmlFor={'search'} />
		<div style={{ height: `40`, display: `flex`, flexDirection: `row`, alignItems: `center`, justifyContent: `center`}}>
			<Input type='text' />
			<Button type='submit'>
				SEARCH
			</Button>
		</div>
	</Container>
)

export default Search;

const Container = glamorous.div({
	height: `100%`,
	width: 268,
	display: `flex`,
	flexDirection: `row`,
	alignItems: `center`,
	justifyContent: `center`
})

const Input = glamorous.input({
	height: `100%`,
	width: 268,
	marginRight: 5,
	paddingTop: 5,
	paddingRight: 10,
	paddingLeft: 10,
	paddingBottom: 5,
	borderRadius: 6,
	border: `none`
})

const Button = glamorous.button({
	transition: `all .2s ease`,
	backgroundColor: `transparent`, 
	border: `none`, 
	color: `#fff`,
	borderRadius: 6,
	padding: 5,
	fontWeight: `bold`,
	cursor: `pointer`,
	'&:hover': {
		color: `rgba(0,0,0,.5)`
	}
})