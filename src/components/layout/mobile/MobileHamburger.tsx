import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface MobileHamburgerWrapperProps {}
interface MobileHamburgerProps {
  openModal: Dispatch<SetStateAction<boolean>>;
}

const MobileHamburgerWrapper = styled.div<MobileHamburgerWrapperProps>`
  width: 25px;
  min-width: 25px;
  cursor: pointer;
  position: absolute;
  right: 0;

  > div {
    height: 3px;
    background: white;
    margin: 5px 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileHamburger: React.FC<MobileHamburgerProps> = ({ openModal }) => {
  return (
    <MobileHamburgerWrapper onClick={() => openModal(true)}>
      <div />
      <div />
      <div />
    </MobileHamburgerWrapper>
  );
};

export default MobileHamburger;
