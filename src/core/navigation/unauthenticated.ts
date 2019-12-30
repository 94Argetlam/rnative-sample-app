import { createSwitchNavigator } from 'react-navigation';

import { Landing, GettingStarted, SignUp } from '../../screens';

export const Unauthenticated = createSwitchNavigator({
  Landing,
  GettingStarted,
  SignUp,
});
