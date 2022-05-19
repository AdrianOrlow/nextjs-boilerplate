import { SubTitle, Title } from '@shared/Typography';
import Button from '@shared/ui/Button';
import { spacingY } from '@utils/stylesUtils';
import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  ${spacingY(1)};
`;

const Error404: React.FC = () => {
  return (
    <Container>
      <div>
        <Title>Ups...</Title>
        <SubTitle>Nie znaleziono strony</SubTitle>
      </div>
      <Link href="/" passHref>
        <Button as="a">Strona główna</Button>
      </Link>
    </Container>
  );
};

export default Error404;
