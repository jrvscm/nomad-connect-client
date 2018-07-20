import React, { Component } from 'react';
import glamorous from 'glamorous';
import {Field, reduxForm, focus} from 'redux-form';

import colors from '../../colors';
import Input from './Input';
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';

class SignUpForm extends Component {
    
	onSubmit(values) {
		console.log(values)
  }

	render() {
		return(
    	<Form
        className="sign-up-form"
        autocomplete="off"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
       >
       	<label htmlFor="firstName">First name</label>
        <Field component={Input} type="text" name="firstName" />
        <label htmlFor="lastName">Last name</label>
        <Field component={Input} type="text" name="lastName" />
        <label htmlFor="username">Username</label>
        <Field
          component={Input}
          type="text"
          name="username"
          validate={[required, nonEmpty, isTrimmed]}
          warn={required}
        />
        <label htmlFor="password">Password</label>
        <Field
          component={Input}
          type="password"
          name="password"
          validate={[required, length({min: 10, max: 72}), isTrimmed]}
        />
        <label htmlFor="passwordConfirm">Confirm password</label>
        <Field
          component={Input}
          type="password"
          name="passwordConfirm"
          validate={[required, nonEmpty, matches('password')]}
        />
        <Button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Register
        </Button>
      </Form>
		);
	}
}

export default reduxForm({
  form: 'SignUpForm',
  	onSubmitFail: (errors, dispatch) =>
    dispatch(focus('SignUpForm', Object.keys(errors)[0]))
})(SignUpForm);

const Button = glamorous.button({
  lineHeight: 3,
  minWidth: `100%`,
  marginTop: 5,
  borderRadius: 3,
  border: `1px solid ${colors.airbnbRed}`,
  background: colors.airbnbRed,
  color: colors.white,
  fontWeight: `bold`,
  fontSize: `16`,
  transition: `all .15s ease`,
  '&:focus': {
    backgroundColor: colors.darkRed
  }
})

const Form = glamorous.form({
  display: `flex`,
  flexDirection: `column`,
  justifyContnet: `flex-start`,
  alignItems: `flex-start`,
  width: `100%`,
  margin: 15,
  borderRadius: 3
})