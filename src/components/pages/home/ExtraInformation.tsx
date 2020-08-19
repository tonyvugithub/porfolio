import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ExtraInformationWrapperProps {}
interface AboutSectionWrapperProps {}
interface ContactSectionWrapperProps {}

const ExtraInformationWrapper = styled.div<ExtraInformationWrapperProps>`
  width: 100%;
  display: flex;
  flex-direction: column;

  a {
    color: inherit;
  }

  .title {
    margin: 30px 0;
  }

  .content {
    width: 60%;
    text-align: center;
    height: 300px;
    margin: 0 auto;

    cursor: pointer;
    font-size: 2.5em;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px) {
      height: 100px;
      min-width: 85%;
    }

    @media (min-width: 768px) {
      min-width: 80%;
    }
    @media (min-width: 1000px) {
      min-width: 60%;
    }

    @media (min-width: 1200px) {
      min-width: 50%;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const AbouSectionWrapper = styled.div<AboutSectionWrapperProps>`
  height: 500px;
  color: rgb(49, 54, 57);
  background: rgb(151, 216, 196);
  position: relative;

  .about {
    border: 5px solid rgb(49, 54, 57);
    .about-text {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 500px) {
    height: 300px;
  }

  @media (min-width: 768px) {
    flex: 1;
  }
`;

const ContactSectionWrapper = styled.div<ContactSectionWrapperProps>`
  height: 500px;
  background: rgb(241, 166, 15);
  color: rgb(245, 245, 245);
  position: relative;

  .contact {
    border: 5px solid rgb(245, 245, 245);
    .contact-text {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 500px) {
    height: 300px;
  }

  @media (min-width: 768px) {
    flex: 1;
  }
`;

const contentVariant = (shadow: string) => {
  return {
    hover: {
      borderRadius: 100,
      textShadow: shadow,
      boxShadow: shadow,
      transition: {
        duration: 0.4,
      },
    },
  };
};

const textVariants = {
  start: {
    rotate: 0,
  },
  hover: {
    rotate: [-2, 2],
    transition: {
      duration: 0.3,
      yoyo: Infinity,
      ease: 'easeIn',
    },
  },
};

const ExtraInformation = () => {
  return (
    <ExtraInformationWrapper>
      <AbouSectionWrapper className="about-section">
        <h2 className="title">/** About */</h2>
        <Link to="/about">
          <motion.div
            className="content about"
            variants={contentVariant('0px 0px 8px rgb(49, 54, 57)')}
            whileHover="hover"
          >
            <motion.div
              className="about-text"
              variants={textVariants}
              initial="start"
              whileHover="hover"
            >
              About Me
            </motion.div>
          </motion.div>
        </Link>
      </AbouSectionWrapper>
      <ContactSectionWrapper className="contact-section">
        <h2 className="title">
          Contact (<span style={{ color: 'rgb(49, 54, 57)' }}> Tony </span>)
        </h2>
        <Link to="/contact">
          <motion.div
            className="content contact"
            variants={contentVariant('0px 0px 8px rgb(211, 211, 211)')}
            whileHover="hover"
          >
            <motion.div
              className="contact-text"
              variants={textVariants}
              initial="start"
              whileHover="hover"
            >
              Contact Me
            </motion.div>
          </motion.div>
        </Link>
      </ContactSectionWrapper>
    </ExtraInformationWrapper>
  );
};

export default ExtraInformation;
