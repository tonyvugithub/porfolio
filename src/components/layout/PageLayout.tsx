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
`;

const Content = styled.main<ContentProps>`
  margin: 0 auto;
  min-height: 100vh;
  padding: 60px 0 195px 0;
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
