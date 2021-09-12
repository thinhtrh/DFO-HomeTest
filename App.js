/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React from 'react';
import MainScreen from './src/screens/main';
import TaskContextProvider from '@contexts/task-context';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: () => Node = () => {
  return (
    <TaskContextProvider>
      <SafeAreaProvider>
        <MainScreen />
      </SafeAreaProvider>
    </TaskContextProvider>
  );
};

export default App;
