import React, { useCallback } from 'react';
import { Text } from 'native-base';

import {
  BaseLayout,
  BaseLayoutContent,
  Button,
  ColorWheelImage,
} from '../../../common/components';

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
    <BaseLayout header={<ColorWheelImage />}>
      <BaseLayoutContent
        primaryButton={
          <Button label="Getting Started" onPress={handleGettingStartedPress} />
        }
        secondaryButton={<Button label="Sign In" bordered={true} />}
        moreInfoButton={
          <Button
            label="You don't have an account? Sign up now."
            transparent={true}
            onPress={handleSignUp}
          />
        }
      />
    </BaseLayout>
  );
}
