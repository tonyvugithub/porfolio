import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fadeInFromTop } from 'animations';
import SvgName from 'components/common/SvgName';

interface HeroImageWrapperProps {
  imgUrl: string;
}
const HeroImageWrapper = styled.div<HeroImageWrapperProps>`
  width: 100%;
  height: min(100vh, 90vw);
  min-height: 600px;

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
  > div.welcome-msg {
    margin: 10px 0;
    animation: ${fadeInFromTop} 2s linear;
  }
  letter-spacing: 0.2em;

  display: grid;
  grid-row-gap: 10px;
`;

const HeroImage = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () =>
      setViewportWidth(window.innerWidth)
    );
    return () => {
      window.removeEventListener('resize', () =>
        setViewportWidth(window.innerWidth)
      );
    };
  }, []);

  let svgName = null;

  if (viewportWidth <= 500) {
    svgName = <SvgName scale={0.65} />;
  } else if (viewportWidth <= 768) {
    svgName = <SvgName scale={0.85} />;
  } else if (viewportWidth <= 1000) {
    svgName = <SvgName scale={0.95} />;
  } else {
    svgName = <SvgName />;
  }

  return (
    <HeroImageWrapper imgUrl={process.env.PUBLIC_URL + '/img/hero.jpg'}>
      <HeroTextWrapper>
        <div className="welcome-msg">
          Hi there!
          <br />I am
        </div>
        {svgName}
      </HeroTextWrapper>
    </HeroImageWrapper>
  );
};

export default HeroImage;
