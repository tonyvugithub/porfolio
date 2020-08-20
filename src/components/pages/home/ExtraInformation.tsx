import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ExtraInformationWrapperProps {}
interface AboutSectionWrapperProps {}
interface ContactSectionWrapperProps {}

const ExtraInformationWrapper = styled.div<ExtraInformationWrapperProps>`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${(p) =>
    p.theme.id === 'dark' &&
    css`
      border-top: 2px solid ${p.theme.text.secondary};
    `}

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
  color: ${(p) => p.theme.text.primary};
  background: ${(p) => p.theme.background.about};
  position: relative;

  .about {
    border: 5px solid ${(p) => p.theme.text.primary};
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
  background: ${(p) => p.theme.background.contact};
  color: rgb(245, 245, 245);
  position: relative;

  .contact-name {
    color: ${(p) => (p.theme.id === 'light' ? 'rgb(49, 54, 57)' : 'grey')};
  }

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

  @media (max-width: 767px) {
    ${(p) =>
      p.theme.id === 'dark' &&
      css`
        border-top: 2px solid #14ffec;
      `}
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
        <h2 className="title" data-aos="fade-up">
          /** About */
        </h2>
        <Link to="/about">
          <motion.div
            className="content about"
            /*Framer-motion library*/
            variants={contentVariant('0px 0px 8px rgb(49, 54, 57)')}
            whileHover="hover"
            /*AOS library*/
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
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
        <h2 className="title" data-aos="fade-up">
          Contact (<span className="contact-name"> Tony </span>)
        </h2>
        <Link to="/contact">
          <motion.div
            className="content contact"
            /*Framer-motion library*/
            variants={contentVariant('0px 0px 8px rgb(211, 211, 211)')}
            whileHover="hover"
            /*AOS library*/
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
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
