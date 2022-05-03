/* eslint-disable react/require-default-props */
import React from 'react';

import { Container, PlayerName } from './styles';

interface PlayerProps {
    name: string;
    // eslint-disable-next-line no-unused-vars
    onLongPress: (player: string) => void;
}

export default function Player({ name, onLongPress }: PlayerProps) {
  return (
    <Container onLongPress={() => onLongPress(name)}>
      <PlayerName>{name}</PlayerName>
    </Container>
  );
}
