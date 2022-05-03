import '~/config/reactotron';
import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Home from '~/screens/Home';
import ToastManager from 'toastify-react-native';
import { persistor, store } from '~/store';

export default function App() {
  return (
    <Provider store={store}>
      <ToastManager position="top" />
      <PersistGate loading={null} persistor={persistor}>
        <Home />
      </PersistGate>
    </Provider>
  );
}
