import * as React from 'react';
import {AppRegistry, View} from 'react-native';
import {Provider as PaperProvider, Text} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {name as appName} from './app.json';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAMES} from './constants/screens.constants';
import LoginScreen from './src/screens/LoginScreen';
import SplashScreen from './src/screens/SplashScreen';
import SignupScreen from './src/screens/SignupScreen';

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={SCREEN_NAMES.SPLASH}>
          <Stack.Screen
            name={SCREEN_NAMES.SPLASH}
            component={SplashScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={SCREEN_NAMES.LOGIN}
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={SCREEN_NAMES.SIGNUP}
            component={SignupScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
