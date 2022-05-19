import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  line-height: 2.2rem;
  font-weight: 700;
`;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primaryAccent};
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: 300;
`;
