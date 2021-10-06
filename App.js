import 'react-native-gesture-handler'
import React from 'react';
import {StatusBar} from 'react-native'

import Routes from './src/routes/routes';


export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="dark-content"/>
      <Routes/>
    </>
  );
}


