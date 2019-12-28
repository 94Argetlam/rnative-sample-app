import React, {Fragment, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {SafeAreaView} from 'react-native';

export default function App() {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 1000);
  });

  return <SafeAreaView></SafeAreaView>;
}
