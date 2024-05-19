import { forwardRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

import { ParaMediumStrong } from '~/components/typography';
import theme from '~/styles/theme';

import Flex from '../Flex';
import Box from '../Box';

import CloseIconComponent from '~public/assets/icons/close.svg';

const COLORS = {
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  BRAND: 'brand',
};

const getMessageTextColor = ({ $color, theme }) => {
  switch ($color) {
    case COLORS.SUCCESS:
      return theme.colors.TEXT_POSITIVE_NORMAL;
    case COLORS.WARNING:
      return theme.colors.TEXT_WARNING_STRONG;
    case COLORS.ERROR:
      return theme.colors.TEXT_NEGATIVE_NORMAL;
    case COLORS.BRAND:
      return theme.colors.TEXT_BRAND_NORMAL;
    case COLORS.INFO:
      return theme.colors.TEXT_NEUTRAL_NORMAL;
  }
};

const getBackgroundColor = ({ $color, theme }) => {
  switch ($color) {
    case COLORS.SUCCESS:
      return theme.colors.BG_POSITIVE_WEAKEST;
    case COLORS.WARNING:
      return theme.colors.BG_WARNING_WEAKEST;
    case COLORS.ERROR:
      return theme.colors.BG_NEGATIVE_WEAKEST;
    case COLORS.BRAND:
      return theme.colors.BG_BRAND_WEAKEST;
    case COLORS.INFO:
      return theme.colors.BG_SURFACE;
  }
};

const getIconColor = ({ $color, theme }) => {
  switch ($color) {
    case COLORS.SUCCESS:
      return theme.colors.ICON_POSITIVE_NORMAL;
    case COLORS.WARNING:
      return theme.colors.ICON_WARNING_STRONG;
    case COLORS.ERROR:
      return theme.colors.ICON_NEGATIVE_NORMAL;
    case COLORS.BRAND:
      return theme.colors.ICON_BRAND_NORMAL;
    case COLORS.INFO:
      return theme.colors.ICON_NEUTRAL_NORMAL;
  }
};

const Root = styled(Flex)`
  align-items: center;
  justify-content: flex-start;
  background: ${getBackgroundColor};
  width: fit-content;
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: 0px 8px 8px 2px rgba(34, 34, 34, 0.08),
    0px 0px 24px -4px rgba(34, 34, 34, 0.08);
`;

const IconWrapper = styled(Box)`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-right: 4px;
  color: ${getIconColor};

  > svg {
    width: 100%;
    height: 100%;
  }
`;

const CloseIcon = styled(CloseIconComponent)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 12px;
  flex-shrink: 0;
  color: ${getIconColor};
`;

const MessageText = styled(ParaMediumStrong)`
  color: ${getMessageTextColor};
`;

const ToastMessage = forwardRef(
  (
    {
      icon,
      message = '',
      iconProps,
      messageProps,
      color,
      onClose = noop,
      ...rest
    },
    ref
  ) => {
    return (
      <ThemeProvider theme={theme}>
        <Root $color={color} {...rest} ref={ref}>
          {icon ? (
            <IconWrapper $color={color} {...iconProps}>
              {icon}
            </IconWrapper>
          ) : null}
          <MessageText $color={color} {...messageProps}>
            {message}
          </MessageText>
          <CloseIcon $color={color} onClick={onClose} />
        </Root>
      </ThemeProvider>
    );
  }
);

ToastMessage.defaultProps = {
  color: COLORS.INFO,
};

ToastMessage.COLORS = COLORS;
ToastMessage.displayName = 'ToastMessage';

ToastMessage.propTypes = {
  icon: PropTypes.node,
  message: PropTypes.string,
  iconProps: PropTypes.object,
  messageProps: PropTypes.object,
  color: PropTypes.oneOf(Object.values(COLORS)),
};

export default ToastMessage;
