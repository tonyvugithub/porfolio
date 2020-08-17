import React from 'react';
import { Link as RRDLink } from 'react-router-dom';

export interface LinkProps {
  active: boolean;
  to: string;
}

//This is required as we can't pass active props directly to react-router's Link
const Link: React.FC<LinkProps> = ({ active, children, to, ...props }) => {
  return (
    <RRDLink to={to} {...props}>
      {children}
    </RRDLink>
  );
};

export default Link;
