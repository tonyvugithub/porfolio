import React from 'react';
import styled from 'styled-components';

interface LogoWrapperProps {
  imgUrl: string;
}

const LogoWrapper = styled.div<LogoWrapperProps>``;

const Logo = () => {
  return (
    <LogoWrapper imgUrl={process.env.PUBLIC_URL + '/logo.jpg'}></LogoWrapper>
  );
};

export default Logo;
