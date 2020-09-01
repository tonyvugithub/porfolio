import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface AboutProps {
  showAbout: Dispatch<SetStateAction<boolean>>;
}

const AboutWrapper = styled(motion.div)`
  width: 100%;

  background: ${(p) => p.theme.palette.background.about};
`;

const AboutContent = styled.div`
  margin: 0 auto;
  padding: 30px 10px;
  text-align: start;

  h2 {
    font-size: 2.5rem;
    color: #e1a87a;
    text-align: end;
  }

  @media (min-width: 768px) {
    max-width: 1200px;
  }
`;
const BlockQuote = styled.blockquote`
  font-size: 1.3rem;
  padding: 5px;
  padding-left: 10px;
  margin: 30px 0;
  color: ${(p) => (p.theme.id === 'light' ? '#ce2149' : 'rgb(151, 216, 196)')};
  border-left: 3px solid
    ${(p) => (p.theme.id === 'light' ? '#ce2149' : 'rgb(151, 216, 196)')};
`;

const AboutParagraph = styled.p`
  color: ${(p) => p.theme.palette.text.primary};
  margin: 10px 0;
`;

const About: React.FC<AboutProps> = ({ showAbout }) => {
  return (
    <AboutWrapper
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { ease: 'easeInOut', duration: 1, delay: 0.3 },
      }}
    >
      <AboutContent>
        <h2>Hmmmm, What's more about me?</h2>
        <BlockQuote>
          Mission-driven full stack web developer with a passion for thoughtful,
          user-friendly and innovation
        </BlockQuote>
        <AboutParagraph>
          In more than 10 years studying and working in Canada, I have always
          sought out opportunities and challenges that give me the meaning of
          who I am. Despite my professional path has involved a few twists here
          and there...
        </AboutParagraph>
        <AboutParagraph>
          As an enthusiastic web developer, I enjoy using my gift of a logic
          mind to solve problems, turn ideas into reality and help others
          achieve their desire.
        </AboutParagraph>
        <div onClick={() => showAbout(false)}>Back</div>
      </AboutContent>
    </AboutWrapper>
  );
};

export default About;
