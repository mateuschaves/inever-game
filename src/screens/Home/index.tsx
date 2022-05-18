import React, { useState, useRef } from 'react';
import {
  Alert, Keyboard, TouchableWithoutFeedback, Vibration,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Button from '~/components/Button';
import TextField from '~/components/TextField';
import MyAlert from '~/components/Alert';
import Player from './components/Player';

import {
  Container, Title, TitleContainer, Form,
} from './styles';
import { RootState, InitialPlayersState } from '../../@types/store';
import { playerActions } from '../../store/ducks/Player/Player';

export default function Home() {
  const dispatch = useDispatch();

  const [playerName, setPlayerName] = useState('');

  const alertRef = useRef<any>();

  const { players } = useSelector<RootState, InitialPlayersState>((state) => state.player);

  function handleAddPlayerName() {
    setPlayerName('');

    try {
      if (players.find((player) => player === playerName)) throw new Error('Jogador já existe');

      if (!playerName.trim()) throw new Error('Jogador inválido');

      dispatch(playerActions.addPlayer({ name: playerName }));
    } catch (error: any) {
      Keyboard.dismiss();
      alertRef?.current?.showAlert(error.message);
    }
  }

  function handleKeyboardDimiss() {
    Keyboard.dismiss();
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
    <TouchableWithoutFeedback onPress={() => handleKeyboardDimiss()}>
      <Container>
        <>
          <TitleContainer>
            <Title>
              Quem vai beber ?
            </Title>
          </TitleContainer>

          <Form>
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
            {
          players.map((player) => (
            <Player key={player} name={player} onLongPress={() => handleRemovePlayerName(player)} />
          ))
        }

          </Form>
          <MyAlert
            ref={alertRef}
            backgroundColor="#fff"
            textColor="#000"
          />
        </>
      </Container>
    </TouchableWithoutFeedback>
  );
}
