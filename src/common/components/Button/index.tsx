import React from 'react';
import { StyleSheet, StyleProp, ViewStyle, Dimensions } from 'react-native';

import { Text, Button as NBButton } from 'native-base';

interface ButtonProps {
  label: string;
  bordered?: boolean;
  transparent?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const Button = ({
  label,
  bordered = false,
  transparent = false,
  style = {},
  onPress,
}: ButtonProps) => {
  const containerStyles = StyleSheet.flatten([styles.container, style]);

  return (
    <NBButton
      style={containerStyles}
      bordered={bordered}
      transparent={transparent}
      onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </NBButton>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: '50%',
    margin: 5,
    justifyContent: 'center',
    borderRadius: 0,
  },
  text: { textTransform: 'uppercase' },
});
