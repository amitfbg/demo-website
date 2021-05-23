import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 11.5rem;
  width: 10.25rem;
`;

function CustomSoftwareIcon(props) {
  // const { matchesSM, matchesXS } = props;
  return (
    <Container className={props.className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 512 512"
      >
        <linearGradient
          id="SVGID_1_"
          x1="256"
          x2="256"
          y1="436"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#addcff"></stop>
          <stop offset="0.503" stopColor="#eaf6ff"></stop>
          <stop offset="1" stopColor="#eaf6ff"></stop>
        </linearGradient>
        <linearGradient
          id="SVGID_2_"
          x1="256"
          x2="256"
          y1="466"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#5558ff"></stop>
          <stop offset="1" stopColor="#00c0ff"></stop>
        </linearGradient>
        <path
          fill="url(#SVGID_1_)"
          d="M497 46h-46l-15 30-15-30h-30l-15 30-15-30h-30l-15 30-15-30H15C6.716 46 0 52.716 0 61v75c0 16.569 13.431 30 30 30v270h452V166c16.569 0 30-13.431 30-30V61c0-8.284-6.716-15-15-15z"
        ></path>
        <path
          fill="url(#SVGID_2_)"
          d="M0 136v315c0 8.399 6.599 15 15 15h482c8.401 0 15-6.601 15-15V136zm256 180h-16.5c-2.1 9.6-5.7 18.3-11.1 26.4l11.699 11.698c6 5.7 6 15.3 0 21-4.89 5.438-14.46 6.543-20.999 0l-11.7-11.7c-8.1 5.402-16.8 9.002-26.4 11.102V391c0 8.399-6.599 15-15 15s-15-6.601-15-15v-16.5c-9.6-2.1-18.3-5.7-26.4-11.102l-11.7 11.7c-6.485 6.489-16.058 5.493-20.999 0-6-5.7-6-15.3 0-21L103.6 342.4c-5.4-8.101-9-16.8-11.1-26.4H76c-8.401 0-15-6.601-15-15 0-8.401 6.599-15 15-15h16.5c2.1-9.6 5.7-18.3 11.1-26.4l-11.699-11.7c-6-5.7-6-15.3 0-21 5.698-6 15.298-6 20.999 0l11.7 11.701c8.101-5.4 16.8-9 26.4-11.1V211c0-8.401 6.599-15 15-15s15 6.599 15 15v16.5c9.6 2.1 18.3 5.7 26.4 11.1l11.7-11.701c5.7-6 15.3-6 20.999 0 6 5.7 6 15.3 0 21l-11.699 11.7c5.4 8.101 9 16.8 11.1 26.4H256c8.401 0 15 6.599 15 15 0 8.4-6.599 15.001-15 15.001zm180 60H316c-8.401 0-15-6.601-15-15 0-8.401 6.599-15 15-15h120c8.401 0 15 6.599 15 15 0 8.399-6.599 15-15 15zm0-60H316c-8.401 0-15-6.601-15-15 0-8.401 6.599-15 15-15h120c8.401 0 15 6.599 15 15 0 8.399-6.599 15-15 15zm0-60H316c-8.401 0-15-6.601-15-15 0-8.401 6.599-15 15-15h120c8.401 0 15 6.599 15 15 0 8.399-6.599 15-15 15zm-270 30c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zm270-180c8.401 0 15-6.601 15-15V46h-30v45c0 8.399 6.599 15 15 15zm-60 0c8.401 0 15-6.601 15-15V46h-30v45c0 8.399 6.599 15 15 15zm-60 0c8.401 0 15-6.601 15-15V46h-30v45c0 8.399 6.599 15 15 15z"
        ></path>
      </svg>
    </Container>
  );
}

export default CustomSoftwareIcon;
