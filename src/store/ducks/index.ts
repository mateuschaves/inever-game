import { combineReducers } from 'redux';

import { playerReducer as player } from './Player/Player';

const createRootReducers = combineReducers({
  player,
});

export default createRootReducers;
