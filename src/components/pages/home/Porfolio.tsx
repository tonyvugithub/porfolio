import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PortfolioCard from './PortfolioCard';

interface PortfolioWrapperProps {}
interface PortfolioContentWrapperProps {}

const PortfolioWrapper = styled.div<PortfolioWrapperProps>`
  width: 100%;
  background: white;
  padding: 50px 0 100px 0;

  h1 {
    margin-bottom: 50px;
  }
`;

const PortfolioContentWrapper = styled(motion.div)<
  PortfolioContentWrapperProps
>`
  display: grid;
  grid-template-columns: repeat(auto-fit, min(400px, 100%));
  justify-content: center;
  grid-auto-rows: 500px;
  grid-gap: 35px;
  padding: 0 10px;

  .card:nth-child(even) .back {
    background: rgba(64, 89, 173);
    color: rgba(64, 89, 173);
  }

  .card:nth-child(even) .back .project-link-wrapper {
    border-top: 3px solid rgb(241, 166, 15);
  }

  .card:nth-child(even):hover .content {
    transform: rotateY(-180deg);
    transition: transform 0.5s;
  }
`;

const Porfolio = () => {
  const projects = [
    {
      title: 'Next News',
      description: 'A News Agregator',
      liveUrl: 'dsadasda',
      repoUrl: 'dasdaasa',
      demoUrl: 'dsadasdas',
      photoUrl: '/img/nextNews.png',
      techList: [
        'Next.js',
        'Bootstrap',
        'TypeScript',
        'Next.js',
        'Bootstrap',
        'TypeScript',
      ],
    },
    {
      title: 'Food Artist',
      description: 'A Recipe Management App',
      liveUrl: 'dasdasda',
      repoUrl: 'dsadadas',
      demoUrl: 'dsadasdas',
      photoUrl: '/img/nextNews.png',
      techList: ['Next.js', 'Bootstrap', 'TypeScript', ''],
    },
    {
      title: 'Food Handling Test',
      description: 'A MVC Mock Test Website',
      liveUrl: 'dasdasd',
      repoUrl: 'dadasdada',
      demoUrl: 'dsadasdas',
      photoUrl: '/img/nextNews.png',
      techList: ['Next.js', 'Bootstrap', 'TypeScript', ''],
    },
    {
      title: 'Fluttering Weather',
      description: 'A Mobile Weather Forecast',
      liveUrl: 'dasdasdas',
      repoUrl: 'dasdasda',
      demoUrl: 'dsadasdas',
      photoUrl: '/img/nextNews.png',
      techList: ['Next.js', 'Bootstrap', 'TypeScript', ''],
    },
  ];

  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      setShowPortfolio(yPos > 500);
    }

    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, []);

  const projectCards = projects.map((project) => (
    <PortfolioCard key={project.title} project={project} />
  ));

  return (
    <PortfolioWrapper className="fade-in">
      <h1>{'{ Porfolio }'}</h1>
      <PortfolioContentWrapper
        animate={{ opacity: showPortfolio ? 1 : 0 }}
        initial={{ opacity: 0 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
          ease: 'easeInOut',
        }}
      >
        {projectCards}
      </PortfolioContentWrapper>
    </PortfolioWrapper>
  );
};

export default Porfolio;
