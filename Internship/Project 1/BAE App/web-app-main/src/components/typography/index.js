import styled, { css } from 'styled-components';

import Text from '~/components/atoms/Text';
import theme from '~/styles/theme';

const mediaQuerySmallScreen = '@media (max-width: 599px)';

export const DisplayLarge = styled(Text)`
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.02em;
  font-family: ${({ theme }) => theme.fontFamilies.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  ${mediaQuerySmallScreen} {
    font-size: 48px;
    line-height: 64px;
  }
`;

DisplayLarge.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_STRONG,
};

export const DisplayMedium = styled(Text)`
  font-size: 48px;
  line-height: 64px;
  letter-spacing: -0.02em;
  font-family: ${({ theme }) => theme.fontFamilies.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  ${mediaQuerySmallScreen} {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.015em;
  }
`;

DisplayMedium.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_STRONG,
};

export const titleXXLargeCss = css`
  font-size: 64px;
  line-height: 76px;
  letter-spacing: -0.02em;
  font-family: ${({ theme }) => theme.fontFamilies.heading};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  ${mediaQuerySmallScreen} {
    font-size: 48px;
    line-height: 52px;
  }
`;

export const TitleXXLarge = styled(Text)`
  ${titleXXLargeCss};
`;

TitleXXLarge.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_STRONG,
};

export const titleXLargeCss = css`
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.02em;
  font-family: ${({ theme }) => theme.fontFamilies.heading};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  ${mediaQuerySmallScreen} {
    font-size: 40px;
    line-height: 44px;
  }
`;

export const TitleXLarge = styled(Text)`
  ${titleXLargeCss};
`;

TitleXLarge.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_STRONG,
};

export const titleLargeCss = css`
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.02em;
  font-family: ${({ theme }) => theme.fontFamilies.heading};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  ${mediaQuerySmallScreen} {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: -0.015em;
  }
`;

export const TitleLarge = styled(Text)`
  ${titleLargeCss};
`;

TitleLarge.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_STRONG,
};

export const titleMediumCss = css`
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.015em;
  font-family: ${({ theme }) => theme.fontFamilies.heading};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  ${mediaQuerySmallScreen} {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const TitleMedium = styled(Text)`
  ${titleMediumCss};
`;

TitleMedium.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_STRONG,
};

export const titleSmallCss = css`
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.015em;
  font-family: ${({ theme }) => theme.fontFamilies.heading};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  ${mediaQuerySmallScreen} {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const TitleSmall = styled(Text)`
  ${titleSmallCss};
`;

TitleSmall.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_STRONG,
};

export const titleXSmallCss = css`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.015em;
  font-family: ${({ theme }) => theme.fontFamilies.heading};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  ${mediaQuerySmallScreen} {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const TitleXSmall = styled(Text)`
  ${titleXSmallCss};
`;

TitleXSmall.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_STRONG,
};

export const titleXXSmallCss = css`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fontFamilies.heading};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  ${mediaQuerySmallScreen} {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const TitleXXSmall = styled(Text)`
  ${titleXXSmallCss};
`;

TitleXXSmall.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_STRONG,
};

export const paraLargeCss = css`
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.015em;
  font-family: ${({ theme }) => theme.fontFamilies.base};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  ${mediaQuerySmallScreen} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ParaLarge = styled(Text)`
  ${paraLargeCss};
`;

ParaLarge.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_NORMAL,
};

export const ParaLargeStrong = styled(ParaLarge)`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const paraMediumCss = css`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
  font-family: ${({ theme }) => theme.fontFamilies.base};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  ${mediaQuerySmallScreen} {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const ParaMedium = styled(Text)`
  ${paraMediumCss};
`;

ParaMedium.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_NORMAL,
};

export const ParaMediumStrong = styled(ParaMedium)`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const paraSmallCss = css`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.015em;
  font-family: ${({ theme }) => theme.fontFamilies.base};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  ${mediaQuerySmallScreen} {
    font-size: 12px;
    line-height: 20px;
  }
`;

export const ParaSmall = styled(Text)`
  ${paraSmallCss};
`;

ParaSmall.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_NORMAL,
};

export const ParaSmallStrong = styled(ParaSmall)`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const paraXSmallCss = css`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.015em;
  font-family: ${({ theme }) => theme.fontFamilies.base};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  ${mediaQuerySmallScreen} {
    font-size: 10px;
    line-height: 16px;
  }
`;

export const ParaXSmall = styled(Text)`
  ${paraXSmallCss};
`;

ParaXSmall.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_NORMAL,
};

export const ParaXSmallStrong = styled(ParaXSmall)`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const labelLargeCss = css`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.01em;
  font-family: ${({ theme }) => theme.fontFamilies.base};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  ${mediaQuerySmallScreen} {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const LabelLarge = styled(Text)`
  ${labelLargeCss};
`;

LabelLarge.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_WEAK,
};

export const LabelLargeStrong = styled(LabelLarge)`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const labelMediumCss = css`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.01em;
  font-family: ${({ theme }) => theme.fontFamilies.base};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  ${mediaQuerySmallScreen} {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const LabelMedium = styled(Text)`
  ${labelMediumCss};
`;

LabelMedium.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_WEAK,
};

export const LabelMediumStrong = styled(LabelMedium)`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const labelSmallCss = css`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.01em;
  font-family: ${({ theme }) => theme.fontFamilies.base};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  ${mediaQuerySmallScreen} {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const LabelSmall = styled(Text)`
  ${labelSmallCss};
`;

LabelSmall.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_WEAK,
};

export const LabelSmallStrong = styled(LabelSmall)`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const labelXSmallCss = css`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.01em;
  font-family: ${({ theme }) => theme.fontFamilies.base};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  ${mediaQuerySmallScreen} {
    font-size: 10px;
    line-height: 12px;
  }
`;

export const LabelXSmall = styled(Text)`
  ${labelXSmallCss};
`;

LabelXSmall.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_WEAK,
};

export const LabelXSmallStrong = styled(LabelXSmall)`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

// Fixed size typography ------------------
export const fixedSizeTitleXXLargeCss = css`
  font-size: 64px;
  line-height: 76px;
  letter-spacing: -0.02em;
  font-family: ${({ theme }) => theme.fontFamilies.poppins};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const FixedSizeTitleXXLarge = styled(Text)`
  ${fixedSizeTitleXXLargeCss};
`;

FixedSizeTitleXXLarge.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_STRONG,
};

export const fixedSizeTitleXLargeCss = css`
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.02em;
  font-family: ${({ theme }) => theme.fontFamilies.poppins};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const FixedSizeTitleXLarge = styled(Text)`
  ${fixedSizeTitleXLargeCss};
`;

FixedSizeTitleXLarge.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_STRONG,
};

export const fixedSizeTitleLargeCss = css`
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.02em;
  font-family: ${({ theme }) => theme.fontFamilies.poppins};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const FixedSizeTitleLarge = styled(Text)`
  ${fixedSizeTitleLargeCss};
`;

FixedSizeTitleLarge.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_STRONG,
};

export const fixedSizeTitleMediumCss = css`
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.015em;
  font-family: ${({ theme }) => theme.fontFamilies.poppins};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const FixedSizeTitleMedium = styled(Text)`
  ${fixedSizeTitleMediumCss};
`;

FixedSizeTitleMedium.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_STRONG,
};

export const fixedSizeTitleSmallCss = css`
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.015em;
  font-family: ${({ theme }) => theme.fontFamilies.poppins};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const FixedSizeTitleSmall = styled(Text)`
  ${fixedSizeTitleSmallCss};
`;

FixedSizeTitleSmall.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_STRONG,
};

export const fixedSizeTitleXSmallCss = css`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.015em;
  font-family: ${({ theme }) => theme.fontFamilies.poppins};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const FixedSizeTitleXSmall = styled(Text)`
  ${fixedSizeTitleXSmallCss};
`;

FixedSizeTitleXSmall.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_STRONG,
};

export const fixedSizeTitleXXSmallCss = css`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fontFamilies.poppins};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const FixedSizeTitleXXSmall = styled(Text)`
  ${fixedSizeTitleXXSmallCss};
`;

FixedSizeTitleXXSmall.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_STRONG,
};

export const fixedSizeTitleXXXSmallCss = css`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fontFamilies.poppins};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const FixedSizeTitleXXXSmall = styled(Text)`
  ${fixedSizeTitleXXXSmallCss};
`;

FixedSizeTitleXXXSmall.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_STRONG,
};

export const fixedSizeParaLargeCss = css`
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.015em;
  font-family: ${({ theme }) => theme.fontFamilies.inter};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const FixedSizeParaLarge = styled(Text)`
  ${fixedSizeParaLargeCss};
`;

FixedSizeParaLarge.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_NORMAL,
};

export const FixedSizeParaLargeStrong = styled(FixedSizeParaLarge)`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const fixedSizeParaMediumCss = css`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
  font-family: ${({ theme }) => theme.fontFamilies.inter};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const FixedSizeParaMedium = styled(Text)`
  ${fixedSizeParaMediumCss};
`;

FixedSizeParaMedium.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_NORMAL,
};

export const FixedSizeParaMediumStrong = styled(FixedSizeParaMedium)`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const fixedSizeParaSmallCss = css`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.015em;
  font-family: ${({ theme }) => theme.fontFamilies.inter};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const FixedSizeParaSmall = styled(Text)`
  ${fixedSizeParaSmallCss};
`;

FixedSizeParaSmall.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_NORMAL,
};

export const FixedSizeParaSmallStrong = styled(FixedSizeParaSmall)`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const fixedSizeParaXSmallCss = css`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.015em;
  font-family: ${({ theme }) => theme.fontFamilies.inter};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const FixedSizeParaXSmall = styled(Text)`
  ${fixedSizeParaXSmallCss};
`;

FixedSizeParaXSmall.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_NORMAL,
};

export const FixedSizeParaXSmallStrong = styled(FixedSizeParaXSmall)`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const fixedSizeParaXXSmallCss = css`
  font-size: 10px;
  line-height: 16px;
  letter-spacing: -0.01em;
  font-family: ${({ theme }) => theme.fontFamilies.inter};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const FixedSizeParaXXSmall = styled(Text)`
  ${fixedSizeParaXXSmallCss};
`;

FixedSizeParaXXSmall.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_NORMAL,
};

export const FixedSizeParaXXSmallStrong = styled(FixedSizeParaXXSmall)`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const fixedSizeLabelLargeCss = css`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.01em;
  font-family: ${({ theme }) => theme.fontFamilies.inter};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const FixedSizeLabelLarge = styled(Text)`
  ${fixedSizeLabelLargeCss};
`;

FixedSizeLabelLarge.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_WEAK,
};

export const FixedSizeLabelLargeStrong = styled(FixedSizeLabelLarge)`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const fixedSizeLabelMediumCss = css`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.01em;
  font-family: ${({ theme }) => theme.fontFamilies.inter};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const FixedSizeLabelMedium = styled(Text)`
  ${fixedSizeLabelMediumCss};
`;

FixedSizeLabelMedium.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_WEAK,
};

export const FixedSizeLabelMediumStrong = styled(FixedSizeLabelMedium)`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const fixedSizeLabelSmallCss = css`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.01em;
  font-family: ${({ theme }) => theme.fontFamilies.inter};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const FixedSizeLabelSmall = styled(Text)`
  ${fixedSizeLabelSmallCss};
`;

FixedSizeLabelSmall.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_WEAK,
};

export const FixedSizeLabelSmallStrong = styled(FixedSizeLabelSmall)`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const fixedSizeLabelXSmallCss = css`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.01em;
  font-family: ${({ theme }) => theme.fontFamilies.inter};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const FixedSizeLabelXSmall = styled(Text)`
  ${fixedSizeLabelXSmallCss};
`;

FixedSizeLabelXSmall.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_WEAK,
};

export const FixedSizeLabelXSmallStrong = styled(FixedSizeLabelXSmall)`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const fixedSizeLabelXXSmallCss = css`
  font-size: 10px;
  line-height: 12px;
  letter-spacing: -0.01em;
  font-family: ${({ theme }) => theme.fontFamilies.inter};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const FixedSizeLabelXXSmall = styled(Text)`
  ${fixedSizeLabelXXSmallCss};
`;

FixedSizeLabelXXSmall.defaultProps = {
  color: theme.colors.TEXT_NEUTRAL_WEAK,
};

export const FixedSizeLabelXXSmallStrong = styled(FixedSizeLabelXXSmall)`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const priceTextCss = css`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fontFamilies.heading};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  ${mediaQuerySmallScreen} {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const PriceText = styled(Text)`
  ${priceTextCss};
`;
