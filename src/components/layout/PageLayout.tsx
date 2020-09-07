import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Modal from 'components/layout/mobile/Modal';

interface PageLayoutProps {
  children: React.ReactNode;
}

interface ContentProps {}

const PayLayoutWrapper = styled.div`
  min-height: 100%;
  position: relative;

  #header.sticky {
    background: ${(p) => p.theme.palette.background.header};
    box-shadow: 0 1px 4px rgba(43, 43, 43, 0.7),
      0 2px 8px rgba(255, 255, 255, 0.5);
    .logo {
      svg {
        box-shadow: 0 4px 8px 3px rgba(241, 241, 241, 0.85),
          0 6px 8px rgba(0, 0, 0, 0.5);
      }
    }
    .nav-menu {
      a {
        color: ${(p) => p.theme.palette.text.primary};

        ${(p) =>
          p.theme.id === 'dark' &&
          css`
            color: ${p.theme.palette.text.primary};
          `}
      }

      a.active,
      a:focus,
      a:hover {
        color: #e1a87a;
      }
    }
    .hamburger {
      > div {
        background: ${(p) => p.theme.palette.text.primary};
      }
    }
  }
`;

const Content = styled.main<ContentProps>`
  margin: 0 auto;
  min-height: 100vh;
  padding: 0px 0 195px 0;
`;

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <PayLayoutWrapper>
      <Header openModal={setShowModal} />
      <Content>{children}</Content>
      <Footer />
      <Modal show={showModal} closeModal={setShowModal} />
    </PayLayoutWrapper>
  );
};

export default PageLayout;
