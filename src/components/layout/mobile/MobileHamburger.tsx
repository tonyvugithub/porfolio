import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface MobileHamburgerWrapperProps {}
interface MobileHamburgerProps {
  openModal: Dispatch<SetStateAction<boolean>>;
  className: string;
}

const MobileHamburgerWrapper = styled.div<MobileHamburgerWrapperProps>`
  width: 25px;
  min-width: 25px;
  cursor: pointer;

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

const MobileHamburger: React.FC<MobileHamburgerProps> = ({
  openModal,
  className,
}) => {
  return (
    <MobileHamburgerWrapper
      onClick={() => openModal(true)}
      className={className}
    >
      <div />
      <div />
      <div />
    </MobileHamburgerWrapper>
  );
};

export default MobileHamburger;
