import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import { COLORS } from '../../../styles';

interface BaseLayoutContentProps {
  children?: ReactNode;
  primaryButton?: ReactNode;
  secondaryButton?: ReactNode;
  moreInfoButton?: ReactNode;
}

export const BaseLayoutContent = ({
  children,
  primaryButton,
  secondaryButton,
  moreInfoButton,
}: BaseLayoutContentProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <>
        <View style={styles.buttonContainer}>
          {primaryButton && primaryButton}
          {secondaryButton && secondaryButton}
        </View>
        {moreInfoButton && moreInfoButton}
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.mercury,
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  buttonContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
