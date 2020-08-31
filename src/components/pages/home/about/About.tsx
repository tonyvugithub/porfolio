import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface AboutProps {
  showAbout: Dispatch<SetStateAction<boolean>>;
}

const AboutWrapper = styled(motion.div)`
  background: red;
  width: 100%;
  height: 500px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 1200px;
  }
`;

const About: React.FC<AboutProps> = ({ showAbout }) => {
  return (
    <AboutWrapper
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { ease: 'easeInOut', duration: 1, delay: 0.3 },
      }}
      exit={{ opacity: 0, transition: { duration: 2 } }}
    >
      <div onClick={() => showAbout(false)}>Back</div>
      <div>About</div>
    </AboutWrapper>
  );
};

export default About;
