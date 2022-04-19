import React from 'react';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react';
import Loading from './components/LoadingComponent';



const { persistor, store } = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Loading />}
        persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}
/* Wrapping the main component in the provider tab like this allows main component and all of its child components ability to connect to redux store */

