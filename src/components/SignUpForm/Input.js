import React, {Component} from 'react';
import glamorous from 'glamorous';

import colors from '../../colors';

export default class Input extends Component {
	componentDidUpdate(prevProps) {
		if(!prevProps.meta.active && this.props.meta.active) {
			this.input.focus();
		}
	}

	render() {
		const { touched, error, warning } = this.props.meta;
		if((touched && error) || (touched && error)) {
			console.log(error)
		}

		return(
			<InputContainer 
				className = "form-input" 
				error={error} 
				warning={warning} 
				touched={touched}
			>
				<label style={{marginBottom: 5, color: `${colors.textGrey}`}} htmlFor={this.props.input.name}>
					{this.props.label}
				</label>
				<input
					autoComplete="off" 
					{...this.props.input}
					id={this.props.input.name}
					type={this.props.type}
					ref={input => (this.input = input)}
				/>
			</InputContainer>
		)
	}
}

const InputContainer = glamorous.div({
	width: `100%`, 
	marginBottom: 20,
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`,
	transition: `all .2s ease`,
}, ({error, touched}) => ({
	['& input']: {
		lineHeight: 2, 
		width: `100%`, 
		boxSizing: `border-box`, 
		borderRadius: 3, 
		fontSize:20,
		paddingRight: 5,
		paddingLeft: 5,
		border: touched && error 
			? `1px solid red` 
			: `1px solid ${colors.textGrey}`
	}
}))