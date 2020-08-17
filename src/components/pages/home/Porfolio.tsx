import React from 'react';
import styled from 'styled-components';

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

const PortfolioContentWrapper = styled.div<PortfolioContentWrapperProps>`
  display: grid;
  grid-template-columns: repeat(auto-fit, min(400px, 100%));
  justify-content: center;
  grid-auto-rows: 500px;
  grid-gap: 35px;
  padding: 0 10px;

  .card:nth-child(even):hover {
    transform: rotateY(-180deg);
  }

  .card:nth-child(even) .back {
    background: rgba(64, 89, 173);
  }
`;

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
  position: relative;
  border-radius: 7px;
`;

const Front = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: grey;
  text-align: center;
  border-radius: 7px;
`;

const Description = styled.div`
  background: white;
  color: rgb(49, 54, 57);
  padding: 15px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  color: grey;
`;

const Back = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  text-align: center;
  border-radius: 7px;
  backface-visibility: hidden;

  background: #f6416c;
  color: white;
  transform: rotateY(180deg);
`;

const Porfolio = () => {
  const projects = [
    {
      title: 'Next News',
      description: 'A News Agregator',
      liveUrl: '',
      repoUrl: '',
      photoUrl: '/img/nextNews.png',
      techList: ['Next.js', 'Bootstrap', 'TypeScript', ''],
    },
    {
      title: 'Food Artist',
      description: 'A Recipe Management App',
      liveUrl: '',
      repoUrl: '',
      photoUrl: '/img/nextNews.png',
      techList: ['Next.js', 'Bootstrap', 'TypeScript', ''],
    },
    {
      title: 'Food Handling Test',
      description: 'A MVC Mock Test Website',
      liveUrl: '',
      repoUrl: '',
      photoUrl: '/img/nextNews.png',
      techList: ['Next.js', 'Bootstrap', 'TypeScript', ''],
    },
    {
      title: 'A Web Calculator',
      description: 'A Web Calculator',
      liveUrl: '',
      repoUrl: '',
      photoUrl: '/img/nextNews.png',
      techList: ['Next.js', 'Bootstrap', 'TypeScript', ''],
    },
  ];

  const projectCards = projects.map((project) => {
    return (
      <Card key={project.title} className="card">
        <CardContent className="content">
          <Front className="front">
            <Description>
              <h2>{project.description}</h2>
            </Description>
          </Front>
          <Back className="back">
            <i className="fas fa-external-link-alt"></i>
          </Back>
        </CardContent>
      </Card>
    );
  });
  return (
    <PortfolioWrapper>
      <h1>{'{ Porfolio }'}</h1>
      <PortfolioContentWrapper>{projectCards}</PortfolioContentWrapper>
    </PortfolioWrapper>
  );
};

export default Porfolio;
