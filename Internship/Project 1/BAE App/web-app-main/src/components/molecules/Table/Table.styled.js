import styled from 'styled-components';

import { Box, Text } from '~/components/atoms';

export const Root = styled(Box)`
  overflow-x: scroll;
  border-radius: 12px;
  box-shadow: 0px 2px 8px 0px rgba(99, 99, 99, 0.2);
  border: 1px solid #f57d1f;
`;

export const StyledTable = styled.table`
  width: 100%;
  color: ${({ theme }) => theme.colors.TEXT_INVERTED};
  background: transparent;
  border: none;
  border-radius: 12px;
  box-shadow: 0px 12px 28px rgba(0, 0, 0, 0.05);
  border-collapse: collapse;
  overflow: hidden;
`;

export const Th = styled(Text).attrs({ as: 'th' })`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.01em;
  font-family: ${({ theme }) => theme.fontFamilies.base};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: #b5b5b5;
  padding: 12px 16px;
  border-bottom: 1px solid #f1b28180;
  text-align: ${({ $align }) => ($align ? $align : 'left')};
  width: ${({ width }) => width ?? 'auto'};
`;

export const Td = styled.td`
  padding: 8px 16px;
  text-align: ${({ $align }) => ($align ? $align : 'left')};
  width: ${({ width }) => width ?? 'auto'};
`;

export const Tr = styled.tr`
  & + & {
    border-top: 1px solid #f1b28180;
  }
`;

export const TextLabel = styled(Text)`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.01em;
  font-family: ${({ theme }) => theme.fontFamilies.base};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: inherit;
`;
