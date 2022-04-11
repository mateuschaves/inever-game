import React from 'react';

import { Container, PlayerName } from './styles';

interface PlayerProps {
    name: string
}

export default function Player({ name }: PlayerProps) {
  return (
    <Container>
      <PlayerName>{name}</PlayerName>
    </Container>
  );
}
