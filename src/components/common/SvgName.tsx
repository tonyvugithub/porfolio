import React from 'react';
import styled from 'styled-components';

const SvgWrapper = styled.div`
  .svg-name path:nth-child(1) {
    stroke-dasharray: 363.0937805175781px;
    stroke-dashoffset: 363.0937805175781px;
    animation: line-anim 2s ease forwards 1s;
  }

  .svg-name path:nth-child(2) {
    stroke-dasharray: 527.4251708984375px;
    stroke-dashoffset: 527.4251708984375px;
    animation: line-anim 2s ease forwards 1.3s;
  }

  .svg-name path:nth-child(3) {
    stroke-dasharray: 605.8627319335938px;
    stroke-dashoffset: 605.8627319335938px;
    animation: line-anim 2s ease forwards 1.6s;
  }

  .svg-name path:nth-child(4) {
    stroke-dasharray: 382.96673583984375px;
    stroke-dashoffset: 382.96673583984375px;
    animation: line-anim 2s ease forwards 1.9s;
  }

  .svg-name {
    fill: transparent;
    animation: fill 1.5s ease-in-out forwards 3.5s;
  }

  @keyframes line-anim {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fill {
    to {
      fill: white;
    }
  }
`;

const SvgName: React.FC<{ scale?: number }> = ({ scale = 1 }) => {
  return (
    <SvgWrapper>
      <svg
        width={`${366 * scale}`}
        height={`${106 * scale}`}
        viewBox="0 0 366 106"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin meet"
        className="svg-name"
      >
        <path
          d="M79.6172 12.7344H46.7109V104H33.2812V12.7344H0.445312V1.625H79.6172V12.7344Z"
          stroke="white"
          strokeWidth="5"
        />
        <path
          d="M171.586 56.1172C171.586 66.1484 169.898 74.9141 166.523 82.4141C163.148 89.8672 158.367 95.5625 152.18 99.5C145.992 103.438 138.773 105.406 130.523 105.406C122.461 105.406 115.312 103.438 109.078 99.5C102.844 95.5156 97.9922 89.8672 94.5234 82.5547C91.1016 75.1953 89.3438 66.6875 89.25 57.0312V49.6484C89.25 39.8047 90.9609 31.1094 94.3828 23.5625C97.8047 16.0156 102.633 10.25 108.867 6.26562C115.148 2.23438 122.32 0.21875 130.383 0.21875C138.586 0.21875 145.805 2.21094 152.039 6.19531C158.32 10.1328 163.148 15.875 166.523 23.4219C169.898 30.9219 171.586 39.6641 171.586 49.6484V56.1172ZM158.156 49.5078C158.156 37.3672 155.719 28.0625 150.844 21.5938C145.969 15.0781 139.148 11.8203 130.383 11.8203C121.852 11.8203 115.125 15.0781 110.203 21.5938C105.328 28.0625 102.82 37.0625 102.68 48.5938V56.1172C102.68 67.8828 105.141 77.1406 110.062 83.8906C115.031 90.5938 121.852 93.9453 130.523 93.9453C139.242 93.9453 145.992 90.7812 150.773 84.4531C155.555 78.0781 158.016 68.9609 158.156 57.1016V49.5078Z"
          stroke="white"
          strokeWidth="5"
        />
        <path
          d="M270.516 104H256.945L205.406 25.1094V104H191.836V1.625H205.406L257.086 80.8672V1.625H270.516V104Z"
          stroke="white"
          strokeWidth="5"
        />
        <path
          d="M323.742 53.0234L350.461 1.625H365.789L330.492 65.8203V104H316.992V65.8203L281.695 1.625H297.164L323.742 53.0234Z"
          stroke="white"
          strokeWidth="5"
        />
      </svg>
    </SvgWrapper>
  );
};

export default SvgName;
