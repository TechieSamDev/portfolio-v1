import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition, Transition, TransitionGroup } from 'react-transition-group';
import StyledHeader from './StyledHeader';
import CTA from './CTA';

const items = [
  <h5 key="1">Hi, my name is</h5>,
  <h1 key="2" style={{ transitionDelay: `${11}00ms` }}>Samuel</h1>,
  <h6 key="3">Front-end Developer</h6>
];


const Home = () => {
  const [inProp, setInProp] = useState(false);
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setInProp(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    // <StyledHeader>
    <>
      <TransitionGroup>
        <div className='col-10 col-lg-8'>
        {
          inProp && items.map((item, i) =>
            <CSSTransition in={inProp} timeout={2000} classNames="fadeup">
              <div className="fadeup-component col" style={{ transitionDelay: `${i + 1}00ms` }} >
                {item}
              </div>
            </CSSTransition>
          )
        }
        <CTA /> 
        </div>
      </TransitionGroup>
    </>

  )
};

export default Home;
