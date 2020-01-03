import React from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

import colorWheel from '../../../assets/images/color-wheel.png';

export const ColorWheelImage = () => (
  <FastImage
    source={colorWheel}
    resizeMode={FastImage.resizeMode.contain}
    style={styles.image}
  />
);

const styles = StyleSheet.create({
  image: {
    width: '50%',
    height: '60%',
  },
});
