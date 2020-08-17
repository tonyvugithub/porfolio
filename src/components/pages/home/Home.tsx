import React from 'react';
import styled from 'styled-components';

import HeroImage from './HeroImage';
import Profile from './Profile';
import Porfolio from './Porfolio';
import ExtraInformation from './ExtraInformation';

const HomeWrapper = styled.div`
  text-align: center;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <HeroImage />
      <Profile />
      <Porfolio />
      <ExtraInformation />
    </HomeWrapper>
  );
};

export default Home;
