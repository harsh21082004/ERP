import styled from 'styled-components';

import Box from '../atoms/Box';

const AppUIShell = ({ children }) => {
  return <Root>{children}</Root>;
};

export default AppUIShell;

const Root = styled(Box)`
  background-color: #23154c;
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
`;
