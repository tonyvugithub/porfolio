import React, { useContext, Dispatch, SetStateAction } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import MobileHamburger from 'components/layout/mobile/MobileHamburger';
import ToggleThemeButton from 'components/common/ToggleThemeButton';
import Link, { LinkProps } from 'components/common/Link';

interface HeaderWrapperProps {}
interface NavMenuProps {}

const HeaderWrapper = styled.div<HeaderWrapperProps>`
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background: transparent;
  height: 100px;
  transition: 0.6s;

  .content-wrapper {
    display: flex;
    height: 100%;
    max-width: 1200px;
    position: relative;
    margin: 0 auto;
    align-items: center;

    padding: 0 10px;

    .logo {
      color: white;
      font-weight: bold;
      padding: 5px;
      border: 1px solid ${(p) => p.theme.text.primary};
      border-radius: 5px;
      text-align: center;

      @media (min-width: 768px) {
        margin: 0;
        margin-right: 15px;
      }
    }
  }

  .hamburger-and-toggle-container {
    margin: auto 0 auto auto;
    display: flex;
    gap: 10px;
  }
`;

const NavMenu = styled(motion.nav)<NavMenuProps>`
  position: absolute;
  display: none;

  .active {
    color: ${(p) => p.theme.palette.secondary};
  }

  @media (min-width: 768px) {
    display: flex;
    background: none;

    /*These are required for it to shift to the right */
    /* top: initial;
    left: initial;
    width: initial;
    margin: auto 0 auto auto; */

    position: relative;
    border-bottom: none;
  }
`;

const StyledLink = styled(Link)<LinkProps>`
  font-weight: 700;
  height: 100%;
  padding: 4px 5px;
  min-width: 50px;
  text-align: center;
  color: white;
`;

const Header: React.FC<{
  openModal: Dispatch<SetStateAction<boolean>>;
}> = ({ openModal }) => {
  const { pathname } = useLocation();
  const { id, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <HeaderWrapper id="header">
        <div className="content-wrapper">
          <motion.div
            className="logo"
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 50 }}
          >
            TONY
          </motion.div>

          <NavMenu className="nav-menu">
            <StyledLink className={pathname === '/' ? 'active' : ''} to="/">
              {/* <motion.div
                initial={{ y: -150 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.5,
                  type: 'tween',
                  duration: 1,
                }}
              > */}
              Home
              {/* </motion.div> */}
            </StyledLink>
            <StyledLink
              to="/blog"
              className={pathname === '/blog' ? 'active' : ''}
            >
              {/* <motion.div
                initial={{ y: -150 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.7,
                  type: 'tween',
                  duration: 1,
                }}
              > */}
              Blog
              {/* </motion.div> */}
            </StyledLink>
            <StyledLink
              to="/contact"
              className={pathname === '/contact' ? 'active' : ''}
            >
              {/* <motion.div
                initial={{ y: -150 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 1,
                  type: 'tween',
                  duration: 1,
                }}
              > */}
              Contact
              {/*  </motion.div> */}
            </StyledLink>
          </NavMenu>
          <div className="hamburger-and-toggle-container">
            <ToggleThemeButton
              isDarkTheme={id === 'dark'}
              onToggle={toggleTheme}
            />
            <MobileHamburger openModal={openModal} />
          </div>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;
