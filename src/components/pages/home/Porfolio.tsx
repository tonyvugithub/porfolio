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
  grid-template-columns: repeat(auto-fit, min(350px, 100%));
  justify-content: center;
  grid-auto-rows: 400px;
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

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, min(400px, 100%));
    grid-auto-rows: 500px;
  }
`;

const Porfolio = () => {
  const projects = [
    {
      title: 'Next News',
      what: 'A News Agregator',
      detail:
        'Built news fetcher app in SSR React with aim to optimize performance on machines with slow internet connection. Coded in TypeScript for better maintenance and documentation',
      liveUrl: 'https://next-news-fetcher.vercel.app/',
      repoUrl: 'https://github.com/tonyvugithub/NextJS-NewsFetcher-TS',
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
      liveUrl: 'https://food-artist.herokuapp.com/',
      repoUrl: 'https://github.com/tonyvugithub/food-artist',
      photoUrl: '/img/foodArtist.png',
      techList: ['React', 'Redux', 'Firebase'],
    },
    {
      title: 'Fluttering Weather',
      what: 'A Mobile Weather Forecast',
      detail:
        'Implemented Flutter’s widgets to develop a weather forecast mobile app providing 16-day forecast for 5000+ cities around the world',
      repoUrl: 'https://github.com/tonyvugithub/flutter_weather',
      demoUrl:
        'https://drive.google.com/file/d/1qzBm1t7ItwHOW3R1gAw_DoF8FZC0rdzG/view?usp=sharing',
      photoUrl: '/img/flutterWeather.png',
      techList: ['Dart', 'Flutter', 'Weather Bit API', 'OpenCage Geocode API'],
    },
    {
      title: 'React Calculator',
      what: 'A Web-based Calculator',
      detail:
        'Applied ReactJS and CSS3 knowledge to develop a web- based calculator app inspired by Window 10 calculator following ReactJS component - oriented programming techniques.',
      liveUrl: 'https://tonyvugithub.github.io/reactjs-calculator/',
      repoUrl: 'https://github.com/tonyvugithub/reactjs-calculator',
      photoUrl: '/img/calculator.png',
      techList: ['React', 'CSS'],
    },
    {
      title: 'Leave Store',
      what: 'An E-commerce Store',
      detail:
        'Built a responsive website for a hypothetical e-commerce merchant selling decorated leaves. Implemented search module for users to search for products by categories and functional shopping cart with email confirmation feature.',
      liveUrl: 'https://tony-eshop.herokuapp.com/',
      repoUrl: 'https://github.com/tonyvugithub/LeavesStore',
      photoUrl: '/img/eshop.png',
      techList: ['Express.js', 'Handlebars', 'Sendrid', 'CSS'],
    },
    {
      title: 'Food Handling Test',
      what: 'A MVC Mock Test Website',
      detail:
        'Spearheaded a group of students to develop an MVC mock testing website that allows users to prepare for Food Handling exams by practicing on 60+ certified questions.',
      liveUrl: 'https://food-handle-test-nodejs.herokuapp.com/',
      repoUrl: 'https://github.com/tonyvugithub/food-handle-test-NodeJS',
      photoUrl: '/img/foodHandling.png',
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
