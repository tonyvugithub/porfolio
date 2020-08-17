import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface ToggleThemeButtonWrapperProps {}
interface ToggleThemeButtonProps {
  isDarkTheme: boolean;
  onToggle: () => void;
}
interface NotchProps {
  isDarkTheme: boolean;
}
const ToggleThemeButtonWrapper = styled(motion.div)<
  ToggleThemeButtonWrapperProps
>`
  width: 50px;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid #eee;
  ${(p) =>
    p.theme.id === 'light'
      ? css`
          background-image: linear-gradient(
            to right,
            white,
            ${(p) => p.theme.text.primary}
          );
        `
      : css`
          background-image: linear-gradient(
            to left,
            white,
            ${(p) => p.theme.text.primary}
          );
        `}

  position: absolute;
  top: 17px;
  left: 5px;
  @media (min-width: 768px) {
    right: 5px;
    left: initial;
  }
`;

const Notch = styled.div<NotchProps>`
  height: 21px;
  width: 21px;
  border: 1px solid #eee;
  border-radius: 50%;
  margin-top: 1px;
  background: ${(p) => p.theme.palette.secondary};
  transition: transform 100ms linear;
  transform: translateX(${(p) => (p.isDarkTheme ? '26px' : '1px')});
`;

const ToggleThemeButton: React.FC<ToggleThemeButtonProps> = ({
  isDarkTheme,
  onToggle,
}) => {
  return (
    <ToggleThemeButtonWrapper
      onClick={onToggle}
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ delay: 1, type: 'spring', stiffness: 40 }}
    >
      <Notch isDarkTheme={isDarkTheme} />
    </ToggleThemeButtonWrapper>
  );
};

export default ToggleThemeButton;
