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
  animation: ${(p) => (p.show ? slideInFromRight : slideOutToRight)} 500ms
    ease-in;
  padding-top: 30px;
  .link {
    padding: 10px;
  }
`;

const BackDrop = styled.div<BackDropProps>`
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  animation: ${(p) => (p.show ? easeIn : easeOut)} 500ms ease-out;
`;

const StyledLink = styled(Link)<LinkProps>`
  color: ${(p) => (p.active ? p.theme.text.primary : p.theme.text.secondary)};
  font-weight: 700;
  height: 100%;
  padding: 4px 5px;
  min-width: 50px;
  text-align: center;
`;

const linkVariants = {
  scaleUp: {
    scale: 1.4,
    transition: {
      duration: 0.3,
    },
  },
};

const Modal: React.FC<ModalProps> = ({ show, closeModal }) => {
  const { pathname } = useLocation();
  return (
    <ModalWrapper show={show}>
      <BackDrop show={show} onClick={() => closeModal(false)} />
      <SideDrawer show={show}>
        <div onClick={() => closeModal(false)}>X</div>
        <motion.div
          className="link"
          variants={linkVariants}
          whileHover="scaleUp"
          whileTap="scaleUp"
        >
          <StyledLink to="/" active={pathname === '/'}>
            Home
          </StyledLink>
        </motion.div>
        <motion.div
          className="link"
          variants={linkVariants}
          whileHover="scaleUp"
          whileTap="scaleUp"
        >
          <StyledLink to="/blog" active={pathname === '/blog'}>
            Blog
          </StyledLink>
        </motion.div>
        <motion.div
          className="link"
          variants={linkVariants}
          whileHover="scaleUp"
          whileTap="scaleUp"
        >
          <StyledLink to="/contact" active={pathname === '/contact'}>
            Contact
          </StyledLink>
        </motion.div>
      </SideDrawer>
    </ModalWrapper>
  );
};

export default Modal;
