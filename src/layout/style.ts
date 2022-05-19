import { breakpoint } from '@theme/breakpoints';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
  min-height: 80vh;
  margin-bottom: 4rem;
  margin-top: 5rem;
  max-width: 100vw;
  width: 100%;
  overflow: hidden;

  ${breakpoint('md')`
    margin-bottom: 6rem;
  `};
`;
