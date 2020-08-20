import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ProfileWrapperProps {}
interface ProfileContentWrapperProps {}
const ProfileWrapper = styled.div<ProfileWrapperProps>`
  width: 100%;
  background: ${(p) => p.theme.background.profile};
  color: white;
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
  height: width;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

const ProfileSummaryWrapper = styled.div`
  flex: 1;
  display: grid;
  grid-auto-rows: min-content;
  grid-gap: 10px;
  text-align: start;
`;

const SummaryPointWrapper = styled.div``;

const Profile = () => {
  return (
    <ProfileWrapper>
      <h1>&lt; Profile /&gt;</h1>
      <ProfileContentWrapper>
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
          <SummaryPointWrapper>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              magni assumenda, voluptatem impedit voluptas nam similique earum
              eveniet est explicabo beatae voluptate repellendus sint, debitis
              cumque quae autem? Minima, harum? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Voluptatem tenetur quod assumenda
              suscipit quo sed iusto expedita obcaecati id nemo reprehenderit ab
              consequatur, mollitia architecto praesentium dicta consectetur?
              Ad, iusto!
            </p>
          </SummaryPointWrapper>
          <SummaryPointWrapper>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              magni assumenda, voluptatem impedit voluptas nam similique earum
              eveniet est explicabo beatae voluptate repellendus sint, debitis
              cumque quae autem? Minima, harum?
            </p>
          </SummaryPointWrapper>
        </ProfileSummaryWrapper>
      </ProfileContentWrapper>
    </ProfileWrapper>
  );
};

export default Profile;
