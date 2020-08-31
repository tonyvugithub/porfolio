import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Contact from './contact/Contact';
import About from './about/About';

interface ExtraInformationWrapperProps {}
interface AboutSectionWrapperProps {}
interface ContactSectionWrapperProps {}

const ExtraInformationWrapper = styled.div<ExtraInformationWrapperProps>`
  width: 100%;
  height: 500px;
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

const AboutSectionWrapper = styled(motion.div)<AboutSectionWrapperProps>`
  height: 500px;
  color: ${(p) => p.theme.palette.text.primary};
  background: ${(p) => p.theme.palette.background.about};
  position: relative;

  .about {
    border: 5px solid ${(p) => p.theme.palette.text.primary};
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

const ContactSectionWrapper = styled(motion.div)<ContactSectionWrapperProps>`
  height: 500px;
  background: ${(p) => p.theme.palette.background.contact};
  color: ${(p) => p.theme.palette.text.primary};
  position: relative;

  .contact-name {
    color: ${(p) => p.theme.palette.text.accent};
  }

  .contact {
    border: 5px solid ${(p) => p.theme.palette.text.primary};
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
    start: {
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
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
  const [showContact, setShowContact] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  let extraInformationContent;
  if (showContact) {
    extraInformationContent = (
      <Contact showContact={setShowContact} showAbout={setShowAbout} />
    );
  } else if (showAbout) {
    extraInformationContent = <About showAbout={setShowAbout} />;
  } else {
    extraInformationContent = (
      <>
        <AboutSectionWrapper
          key="about"
          className="about-section"
          /*AOS library*/
          data-aos="fade-in"
          data-aos-delay="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <h2
            className="title" /* data-aos="fade-up" data-aos-duration="1500" */
          >
            /** About */
          </h2>
          <motion.div
            className="content about"
            /*Framer-motion library*/
            variants={contentVariant('0px 0px 8px rgb(49, 54, 57)')}
            whileHover="hover"
            onClick={() => setShowAbout(true)}
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
        </AboutSectionWrapper>
        <ContactSectionWrapper
          key="contact"
          className="contact-section"
          /*AOS*/
          data-aos="fade-in"
          data-aos-delay="200"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        >
          <h2
            className="title" /* data-aos="fade-up" data-aos-duration="1500" */
          >
            Contact (<span className="contact-name"> Tony </span>)
          </h2>
          <motion.div
            className="content contact"
            /*Framer-motion library*/
            variants={contentVariant('0px 0px 8px rgb(211, 211, 211)')}
            whileHover="hover"
            onClick={() => setShowContact(true)}
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
        </ContactSectionWrapper>
      </>
    );
  }

  return (
    <ExtraInformationWrapper>{extraInformationContent}</ExtraInformationWrapper>
  );
};

export default ExtraInformation;
