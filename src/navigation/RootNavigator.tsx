import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { RegisterScreen } from '../screens/auth/RegisterScreen';
import { CreateBirthdayScreen } from '../screens/birthdays/CreateBirthdayScreen';
import { EditBirthdayScreen } from '../screens/birthdays/EditBirthdayScreen';
import { MainTabs } from './MainTabs';
import { colors } from '../constants/colors';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const appTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.accent,
    background: colors.canvas,
    card: colors.canvas,
    text: colors.text,
    border: colors.canvas,
    notification: colors.accent,
  },
};

export function RootNavigator() {
  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom',
          contentStyle: { backgroundColor: colors.canvas },
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="CreateBirthday" component={CreateBirthdayScreen} />
        <Stack.Screen name="EditBirthday" component={EditBirthdayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
