import React , { Component } from 'react';
import glamorous from 'glamorous';

import colors from '../../colors';
import NavBar from '../NavBar';
import SignUpForm from '../SignUpForm';

const LandingPage = () => (
  <Container>	
    <Mask> 
  	<NavBar />
  	<Row>
  		<Col style={{alignItems: 'flex-end'}}>
        <TextContainer>
          <H1>NOMAD CONNECT</H1>
          <P style={{color: 'white'}}>
  				  This is a paragraph about how awesome our platform is. 
  				  It connects travelers with ease and even makes us a little money too
  				  This is a paragraph about how awesome our platform is. 
  				  It connects travelers with ease and even makes us a little money too  
            This is a paragraph about how awesome our platform is. 
            It connects travelers with ease and even makes us a little money too
            This is a paragraph about how awesome our platform is. 
            It connects travelers with ease and even makes us a little money too              			
          </P>
        </TextContainer> 
  		</Col>
      <Col style={{alignItems: 'flex-start'}}>
        <FormContainer>
          <SignUpForm />
  		  </FormContainer>
      </Col>
  	</Row>
    </Mask>
  </Container>
)

export default LandingPage;

const mediaQueries = {
    large: '@media only screen and (min-width: 1600px)',
    med: '@media only screen and (max-width: 1600px)',
    small: '@media only screen and (max-width: 1200px)',
    phone: '@media only screen and (max-width: 600px)',
}

const Container = glamorous.div({
  minHeight: `100vh`,
  width: `100vw`,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
	backgroundImage: `url('https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fe8441701b9b8810c1415303cefea965&auto=format&fit=crop&w=1100&q=80')`,
	backgroundPosition: `center center`,
	backgroundSize: `cover`,
	backgroundRepeat: `no-repeat`
})

const Mask = glamorous.div({
  height: `100vh`,
  width: `100vw`,
  backgroundImage: `-webkit-linear-gradient(45deg, rgba(69,104,220,.9) 10%, rgba(176,106,179,.9) 90%)`,
  backgroundImage: `-moz-linear-gradient(45deg, rgba(69,104,220,.9) 10%, rgba(176,106,179,.9) 90%)`,
  backgroundImage: `-ms-linear-gradient(45deg, rgba(69,104,220,.9) 10%, rgba(176,106,179,.9) 90%)`,
  backgroundImage: `-o-linear-gradient(45deg, rgba(69,104,220,.9) 10%, rgba(176,106,179,.9) 90%)`,
  backgroundImage: `linear-gradient(45deg, rgba(69,104,220,.9) 10%, rgba(176,106,179,.9) 90%)`,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`
}) 

const TextContainer = glamorous.div({
  width: `60%`,
  [mediaQueries.med]: {
    width: `70%`
  }
})

const H1 = glamorous.h1({
  color: colors.white,
  fontSize: 50,
  fontFamily: `Montserrat, sans-serif`,
  marginTop: 0,
  [mediaQueries.med]:{
    fontSize: 40
  }
})

const P = glamorous.p({
  color: colors.white,
  fontSize: 18,
  fontFamily: `Cardo, serif`
})

const Col = glamorous.div({
	display: `flex`,
	flexDirection: `column`,
	alignItems: `center`,
	justifyContent: `center`,
  height: `100%`,
	width: `50%`,
	margin: 25
})

const Row = glamorous.div({
	display: `flex`,
	flexDirection: `row`,
	alignItems: `flex-start`,
	justifyContent: `center`
})


const FormContainer = glamorous.div({
  display: `flex`,
  flexDirection: `row`,
  alignItems: `center`,
  justifyContent: `center`,
  width: `60%`,
  minWidth: 300,
  backgroundColor: colors.white,
  paddingTop: 20,
  paddingBottom: 20,
  borderRadius: 6,
  [mediaQueries.med]: {
    width: `70%`
  }
})