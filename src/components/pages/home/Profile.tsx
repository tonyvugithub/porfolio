import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { rotateXInfinity } from 'animations/variants';

interface ProfileWrapperProps {}
interface ProfileContentWrapperProps {}
const ProfileWrapper = styled.div<ProfileWrapperProps>`
  width: 100%;
  background: rgb(64, 89, 173);
  background: radial-gradient(
    circle,
    rgba(64, 89, 173, 1) 0%,
    rgba(24, 44, 109, 1) 100%
  );
  color: white;
  padding: 50px 0;
  h1 {
    margin-bottom: 50px;
  }
`;

const ProfileContentWrapper = styled.div<ProfileContentWrapperProps>`
  display: flex;
  padding: 0 10px;
  flex-direction: column;

  @media (min-width: 768px) {
    max-width: 1200px;
    flex-direction: row;
    margin: 0 auto;
  }
`;

const ProfilePhotoWrapper = styled.div`
  margin: 0 auto;
  width: 300px;
  height: 300px;
`;

const ProfileSummaryWrapper = styled.div`
  flex: 1;
`;

const SummaryPointWrapper = styled.div`
  display: grid;
  grid-template-columns: 20px auto;
  grid-auto-rows: min-content;
`;

const Profile = () => {
  return (
    <ProfileWrapper>
      <h1>&lt; Profile /&gt;</h1>
      <ProfileContentWrapper>
        <ProfilePhotoWrapper />
        <ProfileSummaryWrapper>
          <SummaryPointWrapper>
            <div>
              <motion.div
                variants={rotateXInfinity(360, 2, 'easeInOut')}
                animate="visible"
                style={{
                  height: '20px',
                  display: 'flex',
                  alignContent: 'center',
                }}
              >
                &gt;
              </motion.div>
            </div>
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
            <div style={{ height: '10px' }}>
              <motion.div
                variants={rotateXInfinity(360, 2, 'easeInOut')}
                animate="visible"
              >
                &gt;
              </motion.div>
            </div>
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
