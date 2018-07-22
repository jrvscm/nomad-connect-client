import React from 'react';
import glamorous from 'glamorous';
import colors from '../../colors';
import { mediaQueries } from '../UIElements'

const TestimonialCard = ({testimonial}) => (
	<Card>
		<CardHeader colors={testimonial.colors}/>
		<Avatar src={testimonial.image} />
		<Blockquote>
			{testimonial.snippet}
		</Blockquote>
	</Card>
)

export default TestimonialCard;

///TODO create Avatar Component with size props

const Card = glamorous.div({
	display: `flex`,
	flexDirection: `column`,
	justifyContent: `flex-start`,
	alignItems: `center`,
	minWidth: 315,
	maxWidth: 350,
	minHeight: `100%`,
	borderRadius: 3,
	marginRight: 5,
	background: `rgba(0,0,0,.2)`
})

const CardHeader = glamorous.div({
	height: 100,
	width: `100%`,
	[mediaQueries.stubby]: {
		height: 80
	},
}, ({colors}) => ({
  backgroundImage: `-webkit-linear-gradient(45deg, ${colors[0]} 10%, ${colors[1]} 90%)`,
  backgroundImage: `-moz-linear-gradient(45deg, ${colors[0]} 10%, ${colors[1]} 90%)`,
  backgroundImage: `-ms-linear-gradient(45deg, ${colors[0]} 10%, ${colors[1]} 90%)`,
  backgroundImage: `-o-linear-gradient(45deg, ${colors[0]} 10%, ${colors[1]} 90%)`,
  backgroundImage: `linear-gradient(45deg, ${colors[0]} 10%, ${colors[1]} 90%)`,
  borderRadius: 3,
}))

const Avatar = glamorous.div({
	marginTop: -44,
	border:`2px solid ${colors.white}`,
	height: 80,
	width: 80,
	borderRadius: `50%`,
	backgroundPosition: `center, center`,
	backgroundSize: `cover`,
	backgroundRepeat: `no-repeat`
}, (props) => ({
	backgroundImage: `url(${props.src})`,
}))

const Blockquote = glamorous.blockquote({
	color: colors.white,
	fontFamily: 'Cardo, serif',
	borderLeft: `1px solid ${colors.white}`,
	margin: `1.5em 10px`,
	padding: `.5em 10px`
})
