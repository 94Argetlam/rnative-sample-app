import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import FastImage from 'react-native-fast-image';

import { BaseLayout, Button } from '../../../common/components';

import colorWheel from '../../../common/assets/images/color-wheel.png';

export function Landing(props) {
  const handleGettingStartedPress = useCallback(
    () => props.navigation.navigate('GettingStarted'),
    [],
  );

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
        <View style={styles.buttonContainer}>
          <Button label="Getting Started" onPress={handleGettingStartedPress} />
          <Button label="Sign In" bordered={true} />
        </View>
        <Button
          label="You don't have an account? Sign up now."
          transparent={true}
          onPress={handleSignUp}
        />
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
    alignItems: 'center',
    backgroundColor: '#efefef',
    justifyContent: 'space-around',
    flex: 1,
    width: '100%',
  },
  buttonContainer: { justifyContent: 'center', flex: 1 },
});
