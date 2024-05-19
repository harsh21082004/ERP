import styled from 'styled-components';

import { Box, RippleLoader } from '~/components/atoms';
import AppUIShell from '~/components/core/AppUIShell';

const Root = styled(Box)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PageRippleLoader = (props) => {
  return (
    <AppUIShell>
      <Root {...props}>
        <RippleLoader />
      </Root>
    </AppUIShell>
  );
};

export default PageRippleLoader;
