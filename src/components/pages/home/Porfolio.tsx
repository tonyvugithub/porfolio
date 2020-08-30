import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PortfolioCard from './PortfolioCard';

interface PortfolioWrapperProps {}
interface PortfolioContentWrapperProps {}

const PortfolioWrapper = styled.div<PortfolioWrapperProps>`
  width: 100%;
  background: ${(p) => p.theme.palette.background.portfolio};
  padding: 50px 0 100px 0;
  color: ${(p) => p.theme.palette.text.secondary};

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
    background: #fff;
    color: #e1a87a;
  }

  .card:nth-child(even) .back .tech-item {
    background: #0d0d0d;
  }

  .card:nth-child(even) .back .project-detail {
    h2,
    p {
      background: rgba(0, 0, 0, 0.7);
      color: #e1a87a;
    }
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
      what: 'A News Agregator',
      detail:
        'Built news fetcher app in SSR React with aim to optimize performance on machines with slow internet connection. Coded in TypeScript for better maintenance and documentation',
      liveUrl: 'dsadasda',
      repoUrl: 'dasdaasa',
      demoUrl: 'dsadasdas',
      photoUrl: '/img/nextNews.png',
      techList: [
        'Next.js',
        'Bootstrap',
        'TypeScript',
        'Hacker News API',
        'React',
        'Redux',
      ],
    },
    {
      title: 'Food Artist',
      what: 'A Recipe Management App',
      detail:
        'Built news fetcher app in SSR React with aim to optimize performance on machines with slow internet connection. Coded in TypeScript for better maintenance and documentation',
      liveUrl: 'dasdasda',
      repoUrl: 'dsadadas',
      demoUrl: 'dsadasdas',
      photoUrl: '/img/foodArtist.png',
      techList: ['React', 'Redux', 'Firebase'],
    },
    {
      title: 'Ng Boostrap Blog',
      what: 'A Mock Blogging Website',
      detail: '',
      liveUrl: 'dasdasdas',
      repoUrl: 'dasdasda',
      demoUrl: 'dsadasdas',
      photoUrl: '/img/angularBlog.png',
      techList: ['Angular', 'Bootstrap', 'MongoDB'],
    },
    {
      title: 'Fluttering Weather',
      what: 'A Mobile Weather Forecast',
      detail:
        'Implemented Flutter’s widgets to develop a weather forecast mobile app providing 16-day forecast for 5000+ cities around the world',
      liveUrl: 'dasdasdas',
      repoUrl: 'dasdasda',
      demoUrl: 'dsadasdas',
      photoUrl: '/img/flutterWeather.png',
      techList: ['Dart', 'Flutter', 'Weather Bit API', 'OpenCage Geocode API'],
    },
    {
      title: 'React Calculator',
      what: 'A Web-based Calculator',
      detail: '',
      liveUrl: 'dasdasdas',
      repoUrl: 'dasdasda',
      demoUrl: 'dsadasdas',
      photoUrl: '/img/calculator.png',
      techList: ['React', 'CSS'],
    },
    {
      title: 'Leave Store',
      what: 'An E-commerce Store',
      detail: '',
      liveUrl: 'dasdasdas',
      repoUrl: 'dasdasda',
      demoUrl: 'dsadasdas',
      photoUrl: '/img/eshop.png',
      techList: ['Express.js', 'Handlebars', 'Sendrid', 'CSS'],
    },
    {
      title: 'Food Handling Test',
      what: 'A MVC Mock Test Website',
      detail:
        'Spearheaded a group of students to develop an MVC mock testing website that allows users to prepare for Food Handling exams by practicing on 60+ certified questions.',
      liveUrl: 'dasdasd',
      repoUrl: 'dadasdada',
      demoUrl: 'dsadasdas',
      photoUrl: '/img/nextNews.png',
      techList: ['Express.js', 'Handlebars', 'Google Map API'],
    },
  ];

  const projectCards = projects.map((project) => (
    <PortfolioCard key={project.title} project={project} />
  ));

  return (
    <PortfolioWrapper className="fade-in">
      <h1>{'{ Porfolio }'}</h1>
      <PortfolioContentWrapper>{projectCards}</PortfolioContentWrapper>
    </PortfolioWrapper>
  );
};

export default Porfolio;
