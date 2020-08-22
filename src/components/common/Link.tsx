import React from 'react';
import { Link as RRDLink } from 'react-router-dom';

export interface LinkProps {
  to: string;
  className: string;
}

//This is required as we can't pass active props directly to react-router's Link
const Link: React.FC<LinkProps> = ({ className, children, to, ...props }) => {
  return (
    <RRDLink to={to} className={className} {...props}>
      {children}
    </RRDLink>
  );
};

export default Link;
