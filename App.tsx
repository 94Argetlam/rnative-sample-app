import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from 'native-base';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 1000);
  });

  return (
    <SafeAreaView>
      <Text>Hello World</Text>
    </SafeAreaView>
  );
}
