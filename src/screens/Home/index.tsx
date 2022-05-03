import React, { useState } from 'react';
import { Alert, Vibration } from 'react-native';
import Button from '~/components/Button';
import TextField from '~/components/TextField';
import { Toast } from 'toastify-react-native';
import { useSelector, useDispatch } from 'react-redux';
import Player from './components/Player';

import {
  Container, Title, TitleContainer, Form,
} from './styles';
import { RootState, InitialPlayersState } from '../../@types/store';
import { playerActions } from '../../store/ducks/Player/Player';

export default function Home() {
  const dispatch = useDispatch();

  const [playerName, setPlayerName] = useState('');

  const { players } = useSelector<RootState, InitialPlayersState>((state) => state.player);

  function handleAddPlayerName() {
    setPlayerName('');

    try {
      if (players.find((player) => player === playerName)) throw new Error('Jogador já existe');

      if (!playerName.trim()) throw new Error('Jogador inválido');

      dispatch(playerActions.addPlayer({ name: playerName }));
    } catch (error: any) {
      Toast.error(error.message, {
        position: 'bottom',
      });
    }
  }

  function handleRemovePlayerName(player: string) {
    Vibration.vibrate(300);

    Alert.alert('Remover jogador', `Deseja remover ${player} do jogo ?`, [
      {
        text: 'Não',
        onPress: () => {},
      },
      {
        text: 'Sim',
        onPress: () => dispatch(playerActions.removePlayer({ name: player })),
      },
    ]);
  }

  return (
    <Container>
      <TitleContainer>
        <Title>
          Quem vai beber ?
        </Title>
      </TitleContainer>

      <Form>
        <TextField
          autoFocus
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
        {
          players.map((player) => (
            <Player key={player} name={player} onLongPress={() => handleRemovePlayerName(player)} />
          ))
        }

      </Form>

    </Container>
  );
}
