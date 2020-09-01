import React, { useRef, useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface SkillItemProps {
  name: string;
  proficiency: number;
}

interface SkillItemWrapperProps {}

interface SkillItemNameProps {}

interface SkillItemProfiencyBarProps {
  proficiency: number;
}

const SkillItemWrapper = styled.div<SkillItemWrapperProps>`
  display: grid;
  grid-template-columns: 70px 1fr;

  .proficiency-bar-wrapper {
    background: grey;
    position: relative;
  }

  @media (min-width: 600px) {
    grid-template-columns: 75px 1fr;
  }

  @media (min-width: 960px) {
    grid-template-columns: 80px 1fr;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 85px 1fr;
  }

  @media (min-width: 1920px) {
    grid-template-columns: 90px 1fr;
  }
`;

const SkillItemName = styled.div<SkillItemNameProps>`
  background: #0d0d0d;
  padding: 5px;
  color: #e1a87a;
`;

const SkillItemProfiencyBar = styled(motion.div)<SkillItemProfiencyBarProps>`
  width: ${(p) => p.proficiency + '%'};
  height: 100%;
  background: #e1a87a;
`;

const SkillItem: React.FC<SkillItemProps> = ({ name, proficiency }) => {
  const barRef = useRef<HTMLDivElement>(null);

  return (
    <SkillItemWrapper
      data-aos="fade-up"
      data-aos-delay="150"
      data-aos-duration="1000"
      data-aos-easing="ease-in"
    >
      <SkillItemName>{name}</SkillItemName>
      <div className="proficiency-bar-wrapper" ref={barRef}>
        <SkillItemProfiencyBar
          /* initial={{ width: 0 }}
          animate={{
            width: proficiency + '%',
            transition: { delay: 0.2, ease: 'easeInOut', duration: 1.5 },
          }} */
          proficiency={proficiency}
        ></SkillItemProfiencyBar>
      </div>
    </SkillItemWrapper>
  );
};

export default SkillItem;
