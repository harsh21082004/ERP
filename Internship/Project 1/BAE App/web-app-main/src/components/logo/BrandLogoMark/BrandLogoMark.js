import { forwardRef } from 'react';
import styled from 'styled-components';

import { Text } from '~/components/atoms';

const BrandLogoMark = forwardRef(({ ...rest }, ref) => {
  return (
    <BrandName {...rest} ref={ref}>
      Bae App
    </BrandName>
  );
});

BrandLogoMark.displayName = 'BrandLogoMark';

export default BrandLogoMark;

const BrandName = styled(Text)`
  font-size: 42px;
  line-height: 20px;
  letter-spacing: -0.01em;
  font-family: ${({ theme }) => theme.fontFamilies.heading};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.TEXT_INVERTED};
`;
