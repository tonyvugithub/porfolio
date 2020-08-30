import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BlogWrapper = styled(motion.div)`
  padding-top: 100px;
  text-align: center;

  @media (min-width: 768px) {
    max-width: 1200px;
  }
`;

const Blog = () => {
  return (
    <BlogWrapper>
      <div>This feature is in development</div>
    </BlogWrapper>
  );
};

export default Blog;
