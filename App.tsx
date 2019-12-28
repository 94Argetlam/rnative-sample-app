import React, { useEffect } from 'react';
import { Text } from 'native-base';
import SplashScreen from 'react-native-splash-screen';

import { BaseLayout } from './src/common/components';

export default function App() {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 1000);
  });

  return (
    <BaseLayout>
      <Text>Hello World</Text>
    </BaseLayout>
  );
}
