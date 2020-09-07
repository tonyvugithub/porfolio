import React, {
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from 'react';
import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import MobileHamburger from 'components/layout/mobile/MobileHamburger';
import ToggleThemeButton from 'components/common/ToggleThemeButton';
import Link, { LinkProps } from 'components/common/Link';
import Logo from 'components/common/Logo';

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
    max-width: 1200px;
    position: relative;
    margin: 0 auto;
    justify-content: center;
    height: 100%;
    padding: 0 10px;

    .logo {
      font-weight: bold;
      border-radius: 50%;
      display: flex;
      align-items: center;

      svg {
        border-radius: 50%;
      }
    }

    .hamburger-and-toggle-container {
      margin: 10px 0 auto auto;
      display: flex;
      gap: 10px;
    }

    @media (min-width: 768px) {
      .logo {
        margin: 0;
        margin-right: 40px;
        padding-top: 10px;
        align-items: flex-start;
      }
      .hamburger-and-toggle-container {
        margin: auto 0 auto auto;
      }
    }
  }
`;

const NavMenu = styled(motion.nav)<NavMenuProps>`
  position: absolute;
  display: none;

  .nav-link.active,
  .nav-link:focus,
  .nav-link:hover {
    color: #e1a87a;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    height: 100%;
    background: none;
    position: relative;
  }
`;

const StyledLink = styled(Link)<LinkProps>`
  font-weight: 700;
  padding: 4px 10px;
  min-width: 50px;
  text-align: center;
  color: #fff;
  font-size: 1.2rem;
`;

const LogoWrapper = styled.div`
  position: relative;
`;

const Header: React.FC<{
  openModal: Dispatch<SetStateAction<boolean>>;
}> = ({ openModal }) => {
  const { pathname } = useLocation();
  const { id, toggleTheme } = useContext(ThemeContext);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () =>
      setViewportWidth(window.innerWidth)
    );
    return () => {
      window.removeEventListener('resize', () =>
        setViewportWidth(window.innerWidth)
      );
    };
  }, []);

  return (
    <>
      <HeaderWrapper id="header">
        <div className="content-wrapper">
          <LogoWrapper className="logo">
            {viewportWidth >= 768 ? <Logo /> : <Logo width={80} height={80} />}
          </LogoWrapper>
          <NavMenu className="nav-menu">
            <StyledLink
              className={pathname === '/' ? 'nav-link active' : 'nav-link'}
              to="/"
            >
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
              className={pathname === '/blog' ? 'nav-link active' : 'nav-link'}
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
          </NavMenu>
          <div className="hamburger-and-toggle-container">
            <ToggleThemeButton
              isDarkTheme={id === 'dark'}
              onToggle={toggleTheme}
            />
            <MobileHamburger openModal={openModal} className="hamburger" />
          </div>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;
