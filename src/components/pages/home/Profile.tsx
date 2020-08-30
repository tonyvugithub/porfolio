import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import SkillItem from 'components/common/SkillItem';

interface ProfileWrapperProps {}
interface ProfileContentWrapperProps {}
const ProfileWrapper = styled.div<ProfileWrapperProps>`
  width: 100%;
  height: max(70vh, max-content);
  min-height: 70vh;
  background: ${(p) => p.theme.palette.background.profile};
  color: ${(p) => p.theme.palette.text.primary};
  padding: 50px 0;
  h1 {
    margin-bottom: 50px;
  }
`;

const ProfileContentWrapper = styled(motion.div)<ProfileContentWrapperProps>`
  display: flex;
  padding: 0 10px;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    max-width: 1200px;
    flex-direction: row;
    margin: 0 auto;
  }
`;

const ProfilePhotoWrapper = styled(motion.div)`
  margin: 0 auto;
  width: min(300px, 90vw);
  border-radius: 50%;

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

const ProfileSummaryWrapper = styled.div`
  flex: 1;
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 1.2rem;
  text-align: center;
  padding: 0 10px;

  p {
    padding: 10px 0;
  }

  h2 {
    font-size: 2.5rem;
    color: #e1a87a;
  }

  .divider {
    height: 0px;
    width: 80%;
    max-width: 500px;
    margin: 0 auto;
    border-top: 2px solid #e1a87a;
  }
`;

const SummaryPointWrapper = styled.div`
  font-size: inherit;
`;

const SkillWrapper = styled.div`
  padding: 0 10px;
  margin: 50px auto;
  margin-top: ;
  display: grid;
  grid-row-gap: 10px;

  @media (min-width: 768px) {
    max-width: 800px;
  }
`;

const Profile = () => {
  const skillList = [
    {
      name: 'JavaScript',
      proficiency: 75,
    },
    {
      name: 'TypeScript',
      proficiency: 75,
    },
    {
      name: 'React',
      proficiency: 75,
    },
    {
      name: 'HTML5',
      proficiency: 85,
    },
    {
      name: 'CSS3',
      proficiency: 85,
    },
    {
      name: 'Flutter',
      proficiency: 50,
    },
    {
      name: 'Dart',
      proficiency: 50,
    },
    {
      name: 'MySQL',
      proficiency: 60,
    },
    {
      name: 'Oracle',
      proficiency: 60,
    },
    {
      name: 'MongoDB',
      proficiency: 65,
    },
    {
      name: 'Node.js',
      proficiency: 70,
    },
    {
      name: 'Java',
      proficiency: 50,
    },
    {
      name: '.NET',
      proficiency: 50,
    },
    {
      name: 'C#',
      proficiency: 50,
    },
    {
      name: 'Jest',
      proficiency: 65,
    },
    {
      name: 'Docker',
      proficiency: 65,
    },
    {
      name: 'Kubernetes',
      proficiency: 65,
    },
  ];

  const sortedSkillList = skillList.sort(
    (a, b) => b.proficiency - a.proficiency
  );

  return (
    <ProfileWrapper>
      <h1>&lt; Profile /&gt;</h1>
      <ProfileContentWrapper className="content-wrapper">
        <ProfilePhotoWrapper
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
        >
          <img
            src={process.env.PUBLIC_URL + '/img/personal-image-mobile.png'}
            alt=""
          />
        </ProfilePhotoWrapper>
        <ProfileSummaryWrapper
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
        >
          <h2>
            Thank you for your interest in my work. Please take a look around!
          </h2>
          <SummaryPointWrapper>
            <p>
              I am a forth semester Computer Programming and Analysis (CPA)
              student at Seneca School of Software Design and Data Science. I am
              interested in all kind web development and software
              infrastructure, but my focus is on developing interacive web and
              mobile applications yielding the most intuitive and dynamic user
              experiences.
            </p>
          </SummaryPointWrapper>
          <div className="divider"></div>
          <SummaryPointWrapper>
            <p>
              My current objective is to continue explore the world of web
              development and improve my skillset in all prospects of SDLC with
              a highly innovative and demanding tech firm.
            </p>
          </SummaryPointWrapper>
          <div className="divider"></div>
          <SummaryPointWrapper>
            <p>
              I am confident in my ability to help your team and contribute
              positive values. Please feel free to take a look at my list of
              skills below or contact me in the contact section.
            </p>
          </SummaryPointWrapper>
        </ProfileSummaryWrapper>
      </ProfileContentWrapper>
      <SkillWrapper>
        {sortedSkillList.map((s) => (
          <SkillItem key={s.name} name={s.name} proficiency={s.proficiency} />
        ))}
      </SkillWrapper>
    </ProfileWrapper>
  );
};

export default Profile;
