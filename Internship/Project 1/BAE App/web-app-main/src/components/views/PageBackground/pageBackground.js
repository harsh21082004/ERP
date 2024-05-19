import React from 'react';
import styled from 'styled-components';
// import Link from 'next/link';
import { keyframes } from 'styled-components';

import { mediaQueryMobileOnly, mediaQueryTabletOnly } from '~/styles/mixins';

import bgImg from '~public/assets/images/bg.jpg';
import heartImg from '~public/assets/images/heart.png';

const PageBackground = ({ withOutHeart = false }) => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
      <img
        src={bgImg.src}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
      ></img>
      {!withOutHeart && <HeartImage src={heartImg.src} style={{}} />}
    </div>
  );
};

export default PageBackground;

const breatheAnimation = keyframes`
 0% { transform: scale(0.75) translate(-67.5%, 0) }
 50% { transform: scale(0.75) translate(-67.5%, -80px) }
 100% { transform: scale(0.75) translate(-67.5%, 0) }
`;

const HeartImage = styled('img')`
  object-fit: contain;
  width: 40vw;
  height: 40vw;
  position: absolute;
  left: 50%;
  bottom: -10%;
  transform: scale(0.5) translateX(-100%);
  animation-name: ${breatheAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;

  ${mediaQueryTabletOnly} {
    bottom: 0%;
  }

  ${mediaQueryMobileOnly} {
    bottom: 10%;
  }
`;
