import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import { AppContainer } from './src/core/navigation';

export default function App() {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 1000);
  });

  return <AppContainer />;
}
