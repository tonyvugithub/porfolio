import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Card = styled.div`
  width: 100%;
  display: grid;
  position: relative;
  perspective: 2000px;

  &:hover .content {
    transform: rotateY(180deg);
    transition: transform 0.5s;
  }
`;

const CardContent = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: 0 7px 30px -10px rgb(49, 54, 57);
  transition: transform 1s ease-in;
  /*This is needed for the front and back to stack*/
  transform-style: preserve-3d;
  border-radius: 7px;
`;

const Front = styled(motion.div)`
  position: absolute;
  height: 100%;
  width: 100%;
  background: grey;
  text-align: center;
  border-radius: 7px;
  backface-visibility: hidden;
`;

const Description = styled.div`
  background: rgba(0, 0, 0, 0.7);
  color: rgb(49, 54, 57);
  padding: 15px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  color: rgb(245, 245, 245);
`;

const Back = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  text-align: center;
  border-radius: 7px;
  backface-visibility: hidden;
  padding: 20px;

  background: ${(p) => p.theme.card.primary};
  color: #f6416c;
  transform: rotateY(180deg);

  display: grid;
  grid-auto-rows: min-content 1fr min-content;
`;

const TechItemWrapper = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;

const TechItem = styled(motion.div)`
  padding: 10px;
  border-radius: 5px;
  background: white;
`;

const ProjectDetailWrapper = styled(motion.div)`
  display: grid;
  grid-gap: 5px;
  color: white;
  align-self: end;
  margin-bottom: 10px;
  text-align: start;

  h2 {
    background: rgba(0, 0, 0, 0.4);
    padding: 5px;
    border-radius: 5px;
    font-family: 'Courgette', cursive;
  }

  p {
    padding: 5px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 5px;
  }
`;

const ProjectLinkWrapper = styled(motion.div)`
  color: white;
  font-size: 1.5em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: flex-end;

  padding-top: 10px;
  border-top: 3px solid rgb(73, 76, 78);

  .links-container {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`;

const ProjectLink = styled(motion.a)`
  cursor: pointer;
  color: rgb(49, 54, 57);
  background: white;
  box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.3), inset 0px 4px 1px 1px white,
    inset 0px -3px 1px 1px rgba(204, 198, 197, 0.5);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  text-align: center;

  &:active {
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.4),
      inset 0px -3px 1px 1px rgba(204, 198, 197, 0.5);
    color: grey;
  }
`;

const LinkDescription = styled.div`
  color: white;
`;

const linkWrapperVariants = {
  start: {
    opacity: 0,
    y: 10,
  },

  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      when: 'beforeChildren',
      ease: 'linear',
    },
  },
};

const linkVariants = (timeInterval: number = 0) => {
  return {
    start: {
      y: 10,
      opacity: 0,
    },

    end: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1 + timeInterval,
        delay: 0.3 + timeInterval,
      },
    },
  };
};

const techItemVariants = (index: number) => {
  return {
    start: {
      opacity: 0,
      y: -10,
    },

    end: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.3,
        ease: 'easeInOut',
      },
    },

    out: {
      opacity: 0,
    },
  };
};

const detailVariants = {
  start: {
    opacity: 0,
  },

  end: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1.5,
    },
  },
};
interface Project {
  title: string;
  what: string;
  detail: string;
  liveUrl?: string;
  repoUrl?: string;
  demoUrl?: string;
  photoUrl: string;
  techList: string[];
}

interface PortfolioCardProps {
  project: Project;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
  const [linkDesc, setLinkDesc] = useState('');
  const [showBackAnimation, setShowBackAnimation] = useState(false);

  const techItems = project.techList.map((tech: string, index: number) => (
    <TechItem
      key={index}
      variants={techItemVariants(index)}
      initial="start"
      animate={showBackAnimation ? 'end' : 'start'}
    >
      {tech}
    </TechItem>
  ));

  return (
    <Card
      key={project.title}
      className="card"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="150"
      onMouseLeave={() => setShowBackAnimation(false)}
      onMouseEnter={() => setShowBackAnimation(true)}
    >
      <CardContent className="content">
        <Front className="front">
          <img
            src={process.env.PUBLIC_URL + project.photoUrl}
            alt=""
            width="100%"
            height="100%"
            style={{ borderRadius: '7px' }}
          />

          <Description>
            <h2>{project.what}</h2>
          </Description>
        </Front>
        <Back className="back">
          <TechItemWrapper>{techItems}</TechItemWrapper>
          <ProjectDetailWrapper
            variants={detailVariants}
            initial="start"
            animate={showBackAnimation ? 'end' : 'start'}
          >
            <h2>{project.title}</h2>
            <p>{project.detail}</p>
          </ProjectDetailWrapper>
          <AnimatePresence exitBeforeEnter>
            <ProjectLinkWrapper
              className="project-link-wrapper"
              variants={linkWrapperVariants}
              initial="start"
              animate={showBackAnimation ? 'end' : 'start'}
            >
              <LinkDescription>{linkDesc}</LinkDescription>
              <div className="links-container">
                {project.liveUrl && (
                  <ProjectLink
                    variants={linkVariants(0)}
                    onHoverStart={() => setLinkDesc('Live')}
                    onHoverEnd={() => setLinkDesc('')}
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </ProjectLink>
                )}
                {project.repoUrl && (
                  <ProjectLink
                    variants={linkVariants(0.2)}
                    onHoverStart={() => setLinkDesc('Repo')}
                    onHoverEnd={() => setLinkDesc('')}
                  >
                    <i className="fab fa-github-alt"></i>
                  </ProjectLink>
                )}
                {project.demoUrl && (
                  <ProjectLink
                    variants={linkVariants(0.5)}
                    onHoverStart={() => setLinkDesc('Demo')}
                    onHoverEnd={() => setLinkDesc('')}
                  >
                    <i className="fas fa-play"></i>
                  </ProjectLink>
                )}
              </div>
            </ProjectLinkWrapper>
          </AnimatePresence>
        </Back>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
