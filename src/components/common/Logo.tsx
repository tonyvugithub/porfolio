import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
}
const Logo: React.FC<LogoProps> = ({ width = 156, height = 156 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 156 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b)">
        <circle cx="78" cy="78" r="75" fill="black" />
        <circle cx="78" cy="78" r="76.5" stroke="#FFD700" strokeWidth="3" />
      </g>
      <g filter="url(#filter1_b)">
        <path
          d="M90.8477 38.9453H63.4258V115H52.2344V38.9453H24.8711V29.6875H90.8477V38.9453Z"
          fill="#FFD700"
        />
        <path
          d="M90.8477 38.9453V40.9453H92.8477V38.9453H90.8477ZM63.4258 38.9453V36.9453H61.4258V38.9453H63.4258ZM63.4258 115V117H65.4258V115H63.4258ZM52.2344 115H50.2344V117H52.2344V115ZM52.2344 38.9453H54.2344V36.9453H52.2344V38.9453ZM24.8711 38.9453H22.8711V40.9453H24.8711V38.9453ZM24.8711 29.6875V27.6875H22.8711V29.6875H24.8711ZM90.8477 29.6875H92.8477V27.6875H90.8477V29.6875ZM90.8477 36.9453H63.4258V40.9453H90.8477V36.9453ZM61.4258 38.9453V115H65.4258V38.9453H61.4258ZM63.4258 113H52.2344V117H63.4258V113ZM54.2344 115V38.9453H50.2344V115H54.2344ZM52.2344 36.9453H24.8711V40.9453H52.2344V36.9453ZM26.8711 38.9453V29.6875H22.8711V38.9453H26.8711ZM24.8711 31.6875H90.8477V27.6875H24.8711V31.6875ZM88.8477 29.6875V38.9453H92.8477V29.6875H88.8477Z"
          fill="#FFD700"
        />
      </g>
      <g filter="url(#filter2_f)">
        <path
          d="M106.145 126.059L104.254 126.71L106.14 132.182L108.034 126.713L106.145 126.059ZM130.52 55.6875V53.6875H129.096L128.63 55.0329L130.52 55.6875ZM142.824 55.6875L144.699 56.383L145.699 53.6875H142.824V55.6875ZM111.184 141V143H112.575L113.059 141.695L111.184 141ZM101.223 141L99.347 141.694L99.8304 143H101.223V141ZM69.6406 55.6875V53.6875H66.7676L67.765 56.3818L69.6406 55.6875ZM81.8867 55.6875L83.7775 55.0357L83.3128 53.6875H81.8867V55.6875ZM108.034 126.713L132.409 56.3421L128.63 55.0329L104.255 125.404L108.034 126.713ZM130.52 57.6875H142.824V53.6875H130.52V57.6875ZM140.949 54.992L109.308 140.305L113.059 141.695L144.699 56.383L140.949 54.992ZM111.184 139H101.223V143H111.184V139ZM103.098 140.306L71.5162 54.9932L67.765 56.3818L99.347 141.694L103.098 140.306ZM69.6406 57.6875H81.8867V53.6875H69.6406V57.6875ZM79.9959 56.3393L104.254 126.71L108.035 125.407L83.7775 55.0357L79.9959 56.3393Z"
          fill="#FFD700"
        />
      </g>
      <defs>
        <filter
          id="filter0_b"
          x="-4"
          y="-4"
          width="164"
          height="164"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_b"
          x="18.8711"
          y="23.6875"
          width="77.9766"
          height="97.3125"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_f"
          x="62.7676"
          y="49.6875"
          width="86.9315"
          height="97.3125"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
};

export default Logo;
