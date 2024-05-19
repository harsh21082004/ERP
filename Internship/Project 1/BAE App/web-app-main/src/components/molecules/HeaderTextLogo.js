import Link from 'next/link';
import styled from 'styled-components';

import { mediaQueryMobileOrTablet } from '~/styles/mixins';

import { Box } from '../atoms';

const Wrapper = styled(Box)`
  color: #fff;
  font-size: 24px;
  font-family: ${({ theme }) => theme.fontFamilies.pressStart2p};
  position: absolute;
  top: 32px;
  left: 32px;
  cursor: pointer;

  ${mediaQueryMobileOrTablet} {
    font-size: 18px;
  }
`;

const HeaderTextLogo = () => {
  return (
    <Link href={'/'}>
      <Wrapper>Bae App</Wrapper>
    </Link>
  );
};

export default HeaderTextLogo;
