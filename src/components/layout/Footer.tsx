import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface FooterWrapperProps {}
interface CopyRightProps {}
interface SocialMediaWrapperProps {}

const FooterWrapper = styled.div<FooterWrapperProps>`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 1.5em;
  background: ${(p) => p.theme.palette.background.footer};
  padding: 50px 0;
  text-align: center;
  color: ${(p) => p.theme.palette.text.secondary};
`;

const CopyRight = styled.p<CopyRightProps>``;

const SocialMediaWrapper = styled.div<SocialMediaWrapperProps>`
  padding-top: 15px;
  display: flex;
  justify-content: center;
  column-gap: 30px;
  font-size: 2.5em;

  .icon {
    cursor: pointer;
  }
`;

const iconVariants = {
  start: {
    scale: 1,
    textShadow: '0px 0px #fff, 0px 0px #fff',
  },
  hover: {
    scale: [0.9, 1.1],
    textShadow: [
      '4px 3px #e1a87a, -4px -5px rgb(180, 177, 177)',
      '-4px -5px #e1a87a, 4px 5px rgb(180, 177, 177)',
      '4px -3px #e1a87a, -7px 3px rgb(180, 177, 177)',
      '-7px -3px #e1a87a, -4px -3px rgb(180, 177, 177)',
      '-7px 0 #e1a87a , 4px -3px rgb(180, 177, 177)',
    ],
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
  tap: {
    scale: 1.2,
    color: '#f6416c',
  },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterWrapper>
      <CopyRight>
        <motion.i
          className="far fa-copyright"
          animate={{ color: '#f6416c', textShadow: '0px 0px 8px #f6416c' }}
          transition={{ duration: 1.5, yoyo: Infinity, ease: 'easeInOut' }}
        ></motion.i>{' '}
        Tony Vu {currentYear}
      </CopyRight>
      <SocialMediaWrapper>
        <motion.i
          className="fab fa-linkedin-in icon"
          variants={iconVariants}
          initial="start"
          whileHover="hover"
          whileTap="tap"
          title="Linkedin"
        ></motion.i>
        <motion.i
          className="fab fa-github icon"
          variants={iconVariants}
          initial="start"
          whileHover="hover"
          whileTap="tap"
          title="Github"
        ></motion.i>
        <motion.i
          className="fas fa-envelope icon"
          variants={iconVariants}
          initial="start"
          whileHover="hover"
          whileTap="tap"
          title="Email"
        ></motion.i>
      </SocialMediaWrapper>
    </FooterWrapper>
  );
};

export default Footer;
