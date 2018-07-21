import React , { Component } from 'react';
import glamorous from 'glamorous';

import colors from '../../colors';
import NavBar from '../NavBar';
import SignUpForm from '../SignUpForm';
import HorizontalList from './HorizontalList';
import TestimonialCard from './TestimonialCard';
import {mediaQueries} from '../UIElements';


const testimonials = [
  {
    'image': 'https://images.unsplash.com/photo-1529934367645-ccbb82518988?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3237fb1eb3b211acaf8a11f90567a529&auto=format&fit=crop&w=500&q=60',
    'snippet': '"I never would have met my friends from Australia without Nomad Connect. I recommend it to anyone who travels!"',
    'colors': ['#ff9a9e', '#fad0c4']
  },
  {
    'image': 'https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce73d2ef291206da938eaf4c43f584ef&auto=format&fit=crop&w=500&q=60',
    'snippet': '"Nomad Connect makes it so easy to see destinations from a local point of view. I love the must stay\'s!"',  
    'colors': ['#a1c4fd', '#a1c4fd']
  },
  {
    'image': 'https://images.unsplash.com/photo-1526306772629-1dab8b204fe4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d9f4aa5d2fb6d325f1716681cfafab5&auto=format&fit=crop&w=500&q=60',
    'snippet': '"I found so many awesome places to stay while summering in Italy on Nomad Connect, and I didn\'t even start looking until I arrived!"',
    'colors': ['#667eea', '#764ba2']    
  },
  {
    'image': 'https://images.unsplash.com/photo-1528984316296-8d08b70b92ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ef313150821238753b846c52f8c777b2&auto=format&fit=crop&w=500&q=60',
    'snippet': '"I love being a Nomad Host. I\'m able to make friends from allover the world, right from my own home!"',
    'colors': ['#89f7fe', '#66a6ff']    
  },
  {
    'image': 'https://images.unsplash.com/photo-1522194626446-972182d73ab0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d10b01f2e1238fda5b356ac1842dc60&auto=format&fit=crop&w=500&q=60',
    'snippet': '"I never would have met my friends from australia without Nomad Connect. I recommend it to anyone who travels!"',
    'colors': ['#13547a', '#80d0c7']    
  },
  {
    'image': 'https://images.unsplash.com/photo-1495147334217-fcb3445babd5?ixlib=rb-0.3.5&s=d4ede1d55bdd3a017438ec6151b8f820&auto=format&fit=crop&w=500&q=60',
    'snippet': '"Nomad Connect makes it so easy to see destinations from a local point of view. I love the must stay\'s"',  
    'colors': ['#ff9a9e', '#fad0c4']    
  },
  {
    'image': 'https://images.unsplash.com/photo-1529074723-3167de44a1da?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=10185db19b32104ef7087e23d2a1927f&auto=format&fit=crop&w=500&q=60',
    'snippet': '"I found so many awesome places to stay while summering in Italy on Nomad Connect, and I didn\'t even start looking until I arrived!"',
    'colors': ['#ff758c', '#ff7eb3']    
  },
  {
    'image': 'https://images.unsplash.com/photo-1527578444645-85bbbb91d53c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5067a414c7d50feb317d9c9979b06007&auto=format&fit=crop&w=500&q=60',
    'snippet': '"I love being a Nomad Host. I\'m able to make friends from allover the world, right from my own home!"',
    'colors': ['#B7F8DB', '#50A7C2']  
  }  
]

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
          </P>
          <Row style={{justifyContent: `flex-start`, flexDirection: `row`}}>
            <Button>Log in</Button>
            <Button>Learn More</Button>
          </Row>
            <HorizontalList slideWidth='47px' slidesToShow={1} cellSpacing={30}>
              {
                Object.keys(testimonials).map(key => {
                  return (
                    <TestimonialCard key={key} testimonial={testimonials[key]} />
                  )
                })
              }
            </HorizontalList>
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
  maxWidth: `80%`,
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
    minWidth: `100vw`,
    '&:nth-child(2)':{
      display: `none`
    }
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
  }
})