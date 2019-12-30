import React, { useState, useCallback, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Icon } from 'native-base';
import GestureRecognizer from 'react-native-swipe-gestures';

import { Button } from '../../../../../common/components';

import { GETTING_STARTED_TOUR } from '../../../../../constants';

const gettingStartedTourLength = GETTING_STARTED_TOUR.length - 1;

interface GettingStartedTourProps {
  onDone: () => void;
}

export const GettingStartedTour = ({ onDone }: GettingStartedTourProps) => {
  const [step, setStep] = useState<number>(0);

  const { icon, content, actionLabel } = useMemo(
    () => GETTING_STARTED_TOUR[step],
    [step],
  );

  const handleNext = useCallback(() => setStep(step + 1), [step]);
  const handlePrevious = useCallback(() => setStep(step - 1), [step]);

  return (
    <GestureRecognizer
      onSwipeLeft={step !== gettingStartedTourLength && handleNext}
      onSwipeRight={step !== 0 && handlePrevious}
      style={styles.container}>
      <Icon name={icon} type="FontAwesome5" style={styles.icon} />
      <Text>{content}</Text>
      <View style={styles.dotsContainer}>
        {GETTING_STARTED_TOUR.map((item, index) => (
          <View
            key={item.content}
            style={{
              ...styles.dot,
              backgroundColor: step === index ? 'gray' : 'lightgray',
            }}
          />
        ))}
      </View>
      <Button
        label={actionLabel}
        onPress={step !== gettingStartedTourLength ? handleNext : onDone}
      />
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'space-around', flex: 1 },
  icon: { fontSize: 60, color: 'gray', marginTop: 10 },
  dotsContainer: { flexDirection: 'row' },
  dot: { borderRadius: 10, height: 10, marginHorizontal: 5, width: 10 },
});
