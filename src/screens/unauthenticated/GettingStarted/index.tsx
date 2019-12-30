import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import FastImage from 'react-native-fast-image';

import { BaseLayout } from '../../../common/components';

import colorWheel from '../../../common/assets/images/color-wheel.png';
import { GettingStartedTour } from './components/GettingStartedTour';

export function GettingStarted(props) {
  const handleSignUp = useCallback(
    () => props.navigation.navigate('SignUp'),
    [],
  );

  return (
    <BaseLayout>
      <FastImage
        source={colorWheel}
        resizeMode={FastImage.resizeMode.contain}
        style={styles.image}
      />
      <View style={styles.content}>
        <GettingStartedTour onDone={handleSignUp} />
      </View>
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginVertical: '35%',
  },
  content: {
    backgroundColor: '#efefef',
    flex: 1,
    width: '100%',
  },
});
