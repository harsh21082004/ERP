import styled from 'styled-components';

import SectionContainer from '~/components/layout/SectionContainer';

const PageContainer = styled(SectionContainer).attrs({ as: 'main' })`
  width: 100%;
  min-height: calc(100vh);
`;

export const PageContainerFlex = styled(PageContainer)`
  display: flex;
  position: relative;
`;

PageContainerFlex.defaultProps = {
  flexDirection: 'column',
};

export default PageContainer;
