import React from 'react';
import styled from 'styled-components';

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

const SkillItemProfiencyBar = styled.div<SkillItemProfiencyBarProps>`
  width: ${(p) => p.proficiency + '%'};
  height: 100%;
  background: #e1a87a;
`;

const SkillItem: React.FC<SkillItemProps> = ({ name, proficiency }) => {
  return (
    <SkillItemWrapper>
      <SkillItemName>{name}</SkillItemName>
      <div className="proficiency-bar-wrapper">
        <SkillItemProfiencyBar
          proficiency={proficiency}
        ></SkillItemProfiencyBar>
      </div>
    </SkillItemWrapper>
  );
};

export default SkillItem;
