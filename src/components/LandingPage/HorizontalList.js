import React, { Component } from 'react';
import glamorous from 'glamorous';
import Carousel from 'nuka-carousel';

import {mediaQueries} from '../UIElements';

const noop = () => {};

class HorizontalList extends Component {
  render() {
    const { children, slideWidth, slidesToShow, cellSpacing } = this.props;
    
    return (
      <OverflowHidden>
        <Wrapper>
          {
            children.map( (child, key) => {
              return (
                <Container cellSpacing={cellSpacing} key={key}>
                  {child}
                </Container>
              )
            })
          }
        </Wrapper>
      </OverflowHidden>
    )
    
  }
}

export default HorizontalList;

const Container = glamorous.div({}, ({slideWidth, cellSpacing}) => ({
  //marginRight: cellSpacing ? cellSpacing : '0',
}))

const OverflowHidden = glamorous.div({
  position: `relative`,
  maxWidth: `100%`,
});

const Wrapper = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  position: `absolute`,
  top: 25,
  right: 0,
  left: 0,
  overflowX: `scroll`,
  overflowY: `hidden`,
  WebkitOverflowScrolling: 'touch !important',
  '&::-webkit-scrollbar':{
    backgroundColor: `rgba(255,255,255,.2)`
  },
  '&::-webkit-scrollbar-thumb':{
    backgroundColor: `rgba(0,0,0,.2)`
  },
  [mediaQueries.phone]: {
    '&::-webkit-scrollbar':{
      display: `none`,
      width: 0
    }
  }
});