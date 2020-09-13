import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { easeIn, easeOut, slideInFromRight, slideOutToRight } from 'animations';

import Link, { LinkProps } from 'components/common/Link';
import { motion } from 'framer-motion';

interface SideDrawerProps {
  show: boolean;
}
interface ModalWrapperProps {
  show: boolean;
}
interface BackDropProps {
  show: boolean;
}

interface ModalProps {
  show: boolean;
  closeModal: Dispatch<SetStateAction<boolean>>;
}
const ModalWrapper = styled.div<ModalWrapperProps>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  /*These are required for animation on backdrop and drawer to work*/
  transition: ${(p) => (p.show ? 'none' : 'visibility 0s linear 500ms')};
  visibility: ${(p) => (p.show ? 'visible' : 'hidden')};
`;

const SideDrawer = styled.div<SideDrawerProps>`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 215px;
  background: white;
  text-align: center;
  font-size: 2rem;
  animation: ${(p) => (p.show ? slideInFromRight : slideOutToRight)} 500ms
    ease-in;
  padding-top: 30px;
  .link {
    padding: 10px;

    .active {
      color: #e1a87a;
    }
  }
`;

const BackDrop = styled.div<BackDropProps>`
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  animation: ${(p) => (p.show ? easeIn : easeOut)} 500ms ease-out;
`;

const LinksWrapper = styled.div``;

const StyledLink = styled(Link)<LinkProps>`
  color: #0d0d0d;
  font-weight: 700;
  height: 100%;
  padding: 4px 5px;
  min-width: 50px;
  text-align: center;
  &:hover {
    color: #e1a87a;
  }
`;

const SocialMediaWrapper = styled.div`
  margin-top: 50px;
  padding-top: 20px;
  display: grid;
  grid-gap: 20px;
  font-size: 2rem;
  a {
    color: #0d0d0d;
  }
`;

const linkVariants = {
  scaleUp: {
    scale: 1.4,
    transition: {
      duration: 0.3,
    },
  },
};

const iconVariants = {
  start: {
    scale: 1,
    textShadow: '0px 0px #fff, 0px 0px #fff',
  },
  hover: {
    scale: [0.9, 1.4],
    textShadow: [
      '3px 2px #e1a87a, -3px -4px rgb(180, 177, 177)',
      '-3px -4px #e1a87a, 3px 4px rgb(180, 177, 177)',
      '3px -2px #e1a87a, -6px 2px rgb(180, 177, 177)',
      '-6px -2px #e1a87a, -3px -2px rgb(180, 177, 177)',
      '-6px 0 #e1a87a , 3px -2px rgb(180, 177, 177)',
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

const Modal: React.FC<ModalProps> = ({ show, closeModal }) => {
  const { pathname } = useLocation();
  return (
    <ModalWrapper show={show}>
      <BackDrop show={show} onClick={() => closeModal(false)} />
      <SideDrawer show={show}>
        <div onClick={() => closeModal(false)}>X</div>
        <LinksWrapper>
          <motion.div
            className="link"
            variants={linkVariants}
            whileHover="scaleUp"
            whileTap="scaleUp"
            onClick={() => closeModal(false)}
          >
            <StyledLink to="/" className={pathname === '/' ? 'active' : ''}>
              Home
            </StyledLink>
          </motion.div>
          <motion.div
            className="link"
            variants={linkVariants}
            whileHover="scaleUp"
            whileTap="scaleUp"
            onClick={() => closeModal(false)}
          >
            <StyledLink
              to="/blog"
              className={pathname === '/blog' ? 'active' : ''}
            >
              Blog
            </StyledLink>
          </motion.div>
        </LinksWrapper>
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
      </SideDrawer>
    </ModalWrapper>
  );
};

export default Modal;
