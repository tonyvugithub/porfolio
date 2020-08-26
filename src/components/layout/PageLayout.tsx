import React, { useState } from 'react';
import styled from 'styled-components';
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
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
    .logo {
      svg {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.7), 0 6px 8px 2px #ffd700;
      }
    }
    .nav-menu {
      a {
        color: #151515;
      }

      .active {
        color: red;
      }
    }
    .hamburger {
      > div {
        background: #151515;
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
