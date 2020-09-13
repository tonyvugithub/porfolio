import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface FooterWrapperProps {}
interface CopyRightProps {}
interface SocialMediaWrapperProps {}

const FooterWrapper = styled.div<FooterWrapperProps>`
  width: 100%;
  height: 195px;
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 1.5em;
  background: ${(p) => p.theme.palette.background.footer};
  text-align: center;
  color: #fff;
`;

const CopyRight = styled.p<CopyRightProps>`
  margin-top: 50px;
`;

const SocialMediaWrapper = styled.div<SocialMediaWrapperProps>`
  padding-top: 15px;
  display: flex;
  justify-content: center;
  column-gap: 30px;
  font-size: 2.5em;
  a {
    color: inherit !important;
  }

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
  const socialLinks = [
    {
      name: 'linkedin',
      href: 'https://github.com/tonyvugithub',
    },
    {
      name: 'github',
      href: 'https://www.linkedin.com/in/tonyknvu/',
    },
    {
      name: 'linkedin',
      href: 'mailto:tonyknvu1@gmail.com',
    },
  ];

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
        <a href="https://www.linkedin.com/in/tonyknvu/" target="_blank">
          <motion.i
            className="fab fa-linkedin-in icon"
            variants={iconVariants}
            initial="start"
            whileHover="hover"
            whileTap="tap"
            title="Linkedin"
          ></motion.i>
        </a>
        <a href="https://github.com/tonyvugithub" target="_blank">
          <motion.i
            className="fab fa-github icon"
            variants={iconVariants}
            initial="start"
            whileHover="hover"
            whileTap="tap"
            title="Github"
          ></motion.i>
        </a>
        <a href="mailto:tonyknvu1@gmail.com">
          <motion.i
            className="fas fa-envelope icon"
            variants={iconVariants}
            initial="start"
            whileHover="hover"
            whileTap="tap"
            title="Email"
          ></motion.i>
        </a>
      </SocialMediaWrapper>
    </FooterWrapper>
  );
};

export default Footer;
