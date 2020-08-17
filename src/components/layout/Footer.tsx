import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { motion } from 'framer-motion';

interface FooterWrapperProps {}
interface CopyRightProps {}
interface SocialIconWrapperProps {}

const FooterWrapper = styled.div<FooterWrapperProps>`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 1.5em;
  background: rgb(49, 54, 57);
  padding: 50px 0;
  text-align: center;
  color: rgb(245, 245, 245);
`;

const CopyRight = styled.p<CopyRightProps>``;

const SocialMediaWrapper = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: center;
  column-gap: 30px;
  font-size: 2.5em;

  .icon {
    cursor: pointer;
  }
`;

const copyIcon = <FontAwesomeIcon icon={faCopyright} />;

const iconVariants = {
  start: {
    scale: 1,
    textShadow: '0px 0px #fff, 0px 0px #fff',
  },
  hover: {
    scale: [0.9, 1.1],
    textShadow: [
      '4px 3px #f6416c, -4px -5px rgba(64, 89, 173)',
      '-4px -5px #f6416c, 4px 5px rgba(64, 89, 173)',
      '4px -3px #f6416c, -7px 3px rgba(64, 89, 173)',
      '-7px -3px #f6416c, -4px -3px rgba(64, 89, 173)',
      '-7px 0 #f6416c, 4px -3px rgba(64, 89, 173)',
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
  return (
    <FooterWrapper>
      <CopyRight>{copyIcon} Tony Vu 2020</CopyRight>
      <SocialMediaWrapper>
        <motion.i
          className="fab fa-linkedin-in icon"
          variants={iconVariants}
          initial="start"
          whileHover="hover"
          whileTap="tap"
        ></motion.i>
        <motion.i
          className="fab fa-github icon"
          variants={iconVariants}
          initial="start"
          whileHover="hover"
          whileTap="tap"
        ></motion.i>
        <motion.i
          className="fas fa-envelope icon"
          variants={iconVariants}
          initial="start"
          whileHover="hover"
          whileTap="tap"
        ></motion.i>
      </SocialMediaWrapper>
    </FooterWrapper>
  );
};

export default Footer;
