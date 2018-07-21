import React , { Component } from 'react';
import glamorous from 'glamorous';

import colors from '../../colors';
import NavBar from '../NavBar';
import SignUpForm from '../SignUpForm';
import {mediaQueries} from '../UIElements';

const LandingPage = () => (
  <Container>	
    <Mask> 
  	<NavBar />
  	<Row>
  		<Col>
        <TextContainer>
          <H1>NOMAD CONNECT</H1>
          <P style={{color: 'white'}}>
            The social platform dedicated to connecting travelers with local guides, culture, must see's, and must stay's.
            Perhaps you want to be immersed in a foreign country or you've experienced the joy of traveling the world, and want
            to help other people find that same joy! Sign up to become a guide/host for your local area, or browse our current
            hosts to plan a trip!	
          </P>
          <Row style={{justifyContent: `flex-start`, flexDirection: `row`}}>
            <Button>More</Button>
            <Button>Log In</Button>
          </Row> 
        </TextContainer>
      </Col>
      <Col>
        <FormContainer>
          <SignUpForm />
  		  </FormContainer>
      </Col>
  	</Row>
    </Mask>
  </Container>
)

export default LandingPage;

const Button = glamorous.button({
  lineHeight: 3,
  width: 200,
  margin: 5,
  borderRadius: 3,
  border: `1px solid ${colors.airbnbRed}`,
  background: colors.airbnbRed,
  color: colors.white,
  fontWeight: `bold`,
  fontSize: `16`,
  cursor: `pointer`,
  transition: `all .15s ease`,
  '&:focus': {
    backgroundColor: colors.darkRed
  },
  '&:nth-child(2)':{
    backgroundColor: `transparent`,
    border: `1px solid ${colors.airbnbRed}`
  },
  '&:nth-child(2):focus':{
    backgroundColor: colors.darkRed
  }
})

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
  maxWidth: `80%`
})

const H1 = glamorous.h1({
  color: colors.white,
  fontSize: 55,
  fontFamily: `Montserrat, sans-serif`,
  margin: 0,
  [mediaQueries.med]: {
    fontSize: 42
  },
  [mediaQueries.small]:{
    fontSize: 55
  },
  [mediaQueries.phone]:{
    fontSize: 26
  }
})

const P = glamorous.p({
  color: colors.white,
  fontSize: 24,
  fontFamily: `Cardo, serif`,
  [mediaQueries.med]:{
    fontSize: 18
  },
  [mediaQueries.phone]:{
    fontSize: 16
  }
})

const Col = glamorous.div({
	display: `flex`,
	flexDirection: `column`,
	alignItems: `flex-end`,
	justifyContent: `center`,
  height: `100%`,
	width: `60%`,
	margin: 25,
  '&:nth-child(2)': {
    width: `40%`,
    alignItems: 'flex-start'
  },
  [mediaQueries.med]:{
  '&:nth-child(1)':{
      alignItems: `center`
    }
  },
  [mediaQueries.small]: {
    minWidth: `100vw`
  }
})

const Row = glamorous.div({
	display: `flex`,
	flexDirection: `row`,
	alignItems: `flex-start`,
	justifyContent: `center`,
  [mediaQueries.small]:{
    flexDirection: `column`,
    alignItems: `center`
  }
})


const FormContainer = glamorous.div({
  display: `flex`,
  flexDirection: `row`,
  alignItems: `center`,
  justifyContent: `center`,
  width: `80%`,
  minWidth: 315,
  backgroundColor: colors.white,
  paddingTop: 20,
  paddingBottom: 20,
  borderRadius: 6,
  maxWidth: 450,
  [mediaQueries.med]:{
    width: `95%`
  },
  [mediaQueries.small]:{
    display: `none`
  }
})