import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface BlogWrapperProps {
  imgUrl: string;
}

const BlogWrapper = styled(motion.div)<BlogWrapperProps>`
  padding-top: 100px;
  text-align: center;
  height: calc(100vh - 195px);
  width: 100%;
  color: #fff;

  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.85)),
    url(${(p) => p.imgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  position: relative;

  div {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
`;

const Blog = () => {
  return (
    <BlogWrapper imgUrl={process.env.PUBLIC_URL + '/img/blog.jpg'}>
      <div>This feature is in development</div>
    </BlogWrapper>
  );
};

export default Blog;
