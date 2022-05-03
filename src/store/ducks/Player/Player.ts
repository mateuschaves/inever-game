/* eslint-disable no-case-declarations */
import { PlayerDto } from '../../../@types/dto/player';

export const playerTypes = {
  ADD_PLAYER: 'player/ADD_PLAYER',
  REMOVE_PLAYER: 'player/REMOVE_PLAYER',
};

export const playerActions = {
  addPlayer: (data: PlayerDto) => ({
    type: playerTypes.ADD_PLAYER,
    payload: data,
  }),
  removePlayer: (data: PlayerDto) => ({
    type: playerTypes.REMOVE_PLAYER,
    payload: data,
  }),
};

interface actionProps {
    type?: string;
    payload?: PlayerDto;
}

const initialState = {
  players: [],
};

export const playerReducer = (state = initialState, action: actionProps) => {
  switch (action.type) {
    case playerTypes.ADD_PLAYER:
      return { ...state, players: [...state.players, action.payload?.name] };
    case playerTypes.REMOVE_PLAYER:
      const playersAfterRemove = state.players.filter(
        (playerName) => playerName !== action.payload?.name,
      );
      return { ...state, players: playersAfterRemove };
    default:
      return state;
  }
};
