import * as React from "react";
import { View, Text } from "react-native";
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import Main from './components/MainComponent';
const store = ConfigureStore();
export default function App() {
  return (
    <Provider store={store}>
    <Main />
  </Provider>
  );
}
