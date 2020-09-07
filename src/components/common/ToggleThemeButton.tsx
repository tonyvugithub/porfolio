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

  ${(p) =>
    p.theme.id === 'light'
      ? css`
          background: white;
          color: #e1a87a;
          border: 2px solid #f6416c;
        `
      : css`
          background: rgb(245, 245, 245);
          color: #0d0d0d;
          border: 2px solid rgb(151, 216, 196);
        `}

  margin: auto 0 auto auto;

  @media (min-width: 768px) {
    right: 5px;
    left: initial;
  }
`;

const Notch = styled.div<NotchProps>`
  height: 21px;
  width: 21px;
  border-radius: 50%;
  margin-top: 1px;
  background: transparent;
  transition: transform 100ms linear;
  text-align: center;
  transform: translateX(${(p) => (p.isDarkTheme ? '26px' : '1px')});
`;

const ToggleThemeButton: React.FC<ToggleThemeButtonProps> = ({
  isDarkTheme,
  onToggle,
}) => {
  return (
    <ToggleThemeButtonWrapper
      onClick={onToggle}
      initial={{ y: '-10px', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 40 }}
    >
      <Notch isDarkTheme={isDarkTheme}>
        {isDarkTheme ? (
          <i className="fas fa-moon"></i>
        ) : (
          <i className="fas fa-sun"></i>
        )}
      </Notch>
    </ToggleThemeButtonWrapper>
  );
};

export default ToggleThemeButton;
