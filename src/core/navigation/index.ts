import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Unauthenticated } from './unauthenticated';

const AppNavigator = createSwitchNavigator({
  Unauthenticated,
});

export const AppContainer = createAppContainer(AppNavigator);
