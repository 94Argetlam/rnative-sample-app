import React, {
  useState,
  useCallback,
  useMemo,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Icon } from 'native-base';
import GestureRecognizer from 'react-native-swipe-gestures';

import { GETTING_STARTED_TOUR } from '../../../../../constants';
import { COLORS } from '../../../../../common/styles';

const gettingStartedTourLength = GETTING_STARTED_TOUR.length - 1;

export type GettingStartedTourRef = {
  actionLabel: string;
  nextAction: () => void | null;
};

export const GettingStartedTour = forwardRef(
  (props, ref: () => GettingStartedTourRef) => {
    const [step, setStep] = useState<number>(0);

    const { icon, content, actionLabel } = useMemo(
      () => GETTING_STARTED_TOUR[step],
      [step],
    );

    const handleNext = useCallback(() => setStep(step + 1), [step]);

    const handlePrevious = useCallback(() => setStep(step - 1), [step]);

    useImperativeHandle(
      ref,
      () => ({
        actionLabel,
        nextAction: step !== gettingStartedTourLength ? handleNext : null,
      }),
      [step],
    );

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
                backgroundColor:
                  step === index ? COLORS.gray : COLORS.lightgray,
              }}
            />
          ))}
        </View>
      </GestureRecognizer>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  icon: { fontSize: 60, color: COLORS.gray },
  dotsContainer: { flexDirection: 'row' },
  dot: { borderRadius: 10, height: 10, marginHorizontal: 5, width: 10 },
});
