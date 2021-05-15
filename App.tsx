import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import rootReducer from './src/store/index';
import MyStack from './src/Navigations';

const App = () => {
  return (
    <Provider store={rootReducer}>
      <MyStack />
    </Provider>
  );
};

export default App;
