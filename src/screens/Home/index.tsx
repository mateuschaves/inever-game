import React, { useState } from 'react';
import Button from '~/components/Button';
import TextField from '~/components/TextField';
import { Toast } from 'toastify-react-native';
import Player from './components/Player';

import {
  Container, Title, TitleContainer, Form,
} from './styles';

export default function Home() {
  const [players, setPlayers] = useState<string[]>([]);
  const [playerName, setPlayerName] = useState('');

  function handleAddPlayerName() {
    try {
      if (players.find((player) => player === playerName)) throw new Error('Usuário já existe');

      if (!playerName.trim()) throw new Error('Usuário inválido');

      setPlayers((oldState) => [...oldState, playerName]);
      setPlayerName('');
    } catch (error: any) {
      Toast.error(error.message, {
        position: 'bottom',
      });
    }
  }

  return (
    <Container>
      <TitleContainer>
        <Title>
          Quem vai beber ?
        </Title>
      </TitleContainer>

      <Form>
        {
          players.map((player) => (
            <Player key={player} name={player} />
          ))
        }
        <TextField
          keyboardType="name-phone-pad"
          returnKeyType="next"
          autoCorrect={false}
          autoCapitalize="none"
          value={playerName}
          onChangeText={setPlayerName}
        />
        <Button
          title="Adicionar"
          onPress={() => handleAddPlayerName()}
        />
      </Form>

    </Container>
  );
}
