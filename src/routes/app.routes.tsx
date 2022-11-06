import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { New } from '../screens/New';
import { Polls } from '../screens/Polls';
import { SignIn } from '../screens/SignIn';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen
        name="new"
        component={New}
      />
      <Screen
        name="polls"
        component={Polls}
      />
      <Screen
        name="signin"
        component={SignIn}
      />
    </Navigator>
  );
}