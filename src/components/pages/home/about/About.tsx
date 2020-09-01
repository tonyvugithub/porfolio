import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface AboutProps {
  showAbout: Dispatch<SetStateAction<boolean>>;
  showContact: Dispatch<SetStateAction<boolean>>;
}

const AboutWrapper = styled(motion.div)`
  width: 100%;

  background: ${(p) => p.theme.palette.background.about};
`;

const AboutContent = styled.div`
  margin: 0 auto;
  padding: 30px 10px;
  text-align: start;

  h2,
  h3 {
    color: #e1a87a;
    text-align: end;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 2rem;
  }

  .contact-redirect {
    color: ${(p) => p.theme.palette.text.highlight};
    font-weight: bold;
    cursor: pointer;
    border: 1px solid transparent;
    padding: 2px;
    border-radius: 5px;
    &:hover {
      border: 1px solid ${(p) => p.theme.palette.text.highlight};
    }
  }

  @media (min-width: 768px) {
    max-width: 1200px;
  }
`;
const BlockQuote = styled.blockquote`
  font-size: 1.5rem;
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

const About: React.FC<AboutProps> = ({ showAbout, showContact }) => {
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
          user-friendly and innovative mobile and web applications.
        </BlockQuote>
        <h3>My story</h3>
        <AboutParagraph>
          In more than 10 years studying and working in Canada, I have always
          sought out opportunities and challenges that give me the meaning of
          who I am. Despite my professional path has involved a few twists here
          and there - from a finance intern to a commercial product advisor, and
          now a new fish in the world of programming - I've never stepped back
          against challenges to solve problems troubling others.
        </AboutParagraph>
        <AboutParagraph>
          Three words that define who I am: Competent, Hardworking, and
          Efficient. I do not believe in things that come easy in life, and
          hence always looking for opportunities to improve myself.
        </AboutParagraph>
        <AboutParagraph>
          In my humble opinion, technology will continue to evolve and shape up
          how we live in the future. New problems will arise and new problems
          require new solutions. As a tech lover and problem solver, I am
          dreaming of becoming a tech creator and help many people fulfil their
          dreams.
        </AboutParagraph>
        <AboutParagraph>
          Does it sound similar to your ideas? Let's{' '}
          <span
            className="contact-redirect"
            onClick={() => {
              showAbout(false);
              showContact(true);
            }}
          >
            Get In Touch
          </span>{' '}
          and make wonderful things together, shall we?
        </AboutParagraph>
      </AboutContent>
    </AboutWrapper>
  );
};

export default About;
