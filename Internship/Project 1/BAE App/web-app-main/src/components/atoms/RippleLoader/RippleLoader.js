import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import Box from '~/components/atoms/Box';

const COLORS = {
  BRAND: 'brand',
  ACCENT: 'accent',
};

const animationKeyframes = keyframes`
  0% {
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    opacity: 1;
  }

  100% {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
`;

const getBorderColor = ({ color, theme }) => {
  if (color === COLORS.BRAND) {
    return theme.colors.BORDER_BRAND_NORMAL;
  }
  if (color === COLORS.ACCENT) {
    return theme.colors.BORDER_ACCENT_NORMAL;
  }
};

const Root = styled(Box)`
  display: inline-block;
  position: relative;
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};

  > div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    border-color: ${getBorderColor};
    border-width: ${(props) => props.size * 0.05};
    animation: ${animationKeyframes} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

    &:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
`;

const RippleLoader = ({ size, color, ...otherProps }) => {
  return (
    <Root size={size} color={color} {...otherProps}>
      <div />
      <div />
    </Root>
  );
};

RippleLoader.propTypes = {
  color: PropTypes.oneOf(Object.values(COLORS)),
  size: PropTypes.number,
};

RippleLoader.defaultProps = {
  color: COLORS.BRAND,
  size: 40,
};

RippleLoader.COLORS = COLORS;

export default RippleLoader;
