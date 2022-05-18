import React, { useState, useRef } from 'react';
import {
  Alert, Keyboard, TouchableWithoutFeedback, Vibration, FlatList
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
    try {
      if (players.find((player) => player === playerName)) throw new Error('Jogador já existe 🤔');

      if (!playerName.trim()) throw new Error('Jogador inválido 🤥');

      if (players.length >= 5) throw new Error('Já tem muita gente 😬');

      dispatch(playerActions.addPlayer({ name: playerName }));
    } catch (error: any) {
      handleKeyboardDimiss();
      alertRef?.current?.showAlert(error.message);
    }
    setPlayerName('');
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
              Quem vai jogar ?
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

            <FlatList
              data={players}
              renderItem={({ item }) => (
                <Player key={item} name={item} onLongPress={() => handleRemovePlayerName(item)} />
              )}
              keyExtractor={(item, index) => `${item}-${index}`}
            />
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
