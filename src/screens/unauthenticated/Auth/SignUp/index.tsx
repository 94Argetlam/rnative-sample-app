import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import FastImage from 'react-native-fast-image';

import { BaseLayout, Button } from '../../../../common/components';

import colorWheel from '../../../../common/assets/images/color-wheel.png';

export function SignUp(props) {
  const handleCancel = useCallback(
    () => props.navigation.navigate('Landing'),
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
        <Button label="Cancel" bordered={true} onPress={handleCancel} />
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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'space-around',
    flex: 1,
    width: '100%',
  },
  buttonContainer: { justifyContent: 'center', flex: 1 },
  button: { margin: 5, justifyContent: 'center' },
  text: { textTransform: 'uppercase' },
});
