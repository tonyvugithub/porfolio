import React from 'react';
import styled from 'styled-components';
import { fadeInFromTop } from 'animations';

interface HeroImageWrapperProps {
  imgUrl: string;
}
const HeroImageWrapper = styled.div<HeroImageWrapperProps>`
  width: 100%;
  height: 100vh;

  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.85)),
    url(${(p) => p.imgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  position: relative;
`;

const HeroTextWrapper = styled.div`
  color: white;
  font-weight: bold;
  font-size: 3.5em;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  > div {
    margin: 10px 0;
    animation: ${fadeInFromTop} 2s linear;
  }
  letter-spacing: 0.2em;
`;

const HeroImage = () => {
  return (
    <HeroImageWrapper imgUrl={process.env.PUBLIC_URL + '/img/hero.jpg'}>
      <HeroTextWrapper>
        <div>Hi there!</div>
        <div>I am TONY</div>
      </HeroTextWrapper>
    </HeroImageWrapper>
  );
};

export default HeroImage;
