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
		let error;
		if(this.props.meta.touched && this.props.meta.error) {
			error = <div className="form-error">{this.props.meta.error}</div>;
		}
		let warning;
		if(this.props.meta.touched && this.props.meta.warning) {
			warning = (
				<div className="form-warning">{this.props.meta.warning}</div>
			)
		}

		return(
			<InputContainer className = "form-input">
				<label style={{marginBottom: 5}} htmlFor={this.props.input.name}>
					{this.props.label}
				</label>
				<input
					autocomplete="off" 
					style={{
						lineHeight: 2, 
						width: `100%`, 
						boxSizing: `border-box`, 
						borderRadius: 3, 
						border: `1px solid ${colors.textGrey}`,
						fontSize:20,
						paddingRight: 5,
						paddingLeft: 5
					}}
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
	justifyContent: `center` 
})