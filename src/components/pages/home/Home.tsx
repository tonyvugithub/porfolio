import React from 'react';
import styled from 'styled-components';

import HeroImage from './HeroImage';
import Profile from './Profile';
import Porfolio from './Porfolio';
import ExtraInformation from './ExtraInformation';
import { motion } from 'framer-motion';

const HomeWrapper = styled(motion.div)`
  text-align: center;
`;

const Home = () => {
  return (
    <HomeWrapper
      exit={{
        x: '-100vw',
        transition: {
          ease: 'easeInOut',
        },
      }}
    >
      <HeroImage />
      <Profile />
      <Porfolio />
      <ExtraInformation />
    </HomeWrapper>
  );
};

export default Home;
