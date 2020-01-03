import React, { useCallback, useMemo, useState } from 'react';

import {
  BaseLayout,
  BaseLayoutContent,
  ColorWheelImage,
  Button,
} from '../../../common/components';
import {
  GettingStartedTour,
  GettingStartedTourRef,
} from './components/GettingStartedTour';

export function GettingStarted(props) {
  const [gettingStartedTourRef, setGettingStartedTourRef] = useState<
    GettingStartedTourRef
  >({ actionLabel: '', nextAction: null });

  const { actionLabel, nextAction } = useMemo(() => gettingStartedTourRef, [
    gettingStartedTourRef,
  ]);

  const handleSignUp = useCallback(
    () => props.navigation.navigate('SignUp'),
    [],
  );

  const handleCancel = useCallback(
    () => props.navigation.navigate('Landing'),
    [],
  );

  return (
    <BaseLayout header={<ColorWheelImage />}>
      <BaseLayoutContent
        primaryButton={
          <Button
            label={actionLabel}
            onPress={nextAction ? nextAction : handleSignUp}
          />
        }
        secondaryButton={
          <Button label="Cancel" bordered={true} onPress={handleCancel} />
        }>
        <GettingStartedTour ref={setGettingStartedTourRef} />
      </BaseLayoutContent>
    </BaseLayout>
  );
}
