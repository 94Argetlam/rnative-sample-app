import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';

import {
  BaseLayout,
  Button,
  ColorWheelImage,
  BaseLayoutContent,
} from '../../../../common/components';

export function SignUp(props) {
  const handleCancel = useCallback(
    () => props.navigation.navigate('Landing'),
    [],
  );

  return (
    <BaseLayout header={<ColorWheelImage />}>
      <BaseLayoutContent
        primaryButton={<Button label="Sign up" />}
        secondaryButton={
          <Button label={'Cancel'} bordered onPress={handleCancel} />
        }
      />
    </BaseLayout>
  );
}
