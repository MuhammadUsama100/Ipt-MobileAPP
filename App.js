import * as React from 'react';
import {AppRegistry} from 'react-native';
import {
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import {
  NavigationContainer,
} from '@react-navigation/native';
import {name as appName} from './app.json';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAMES} from './constants/screens.constants';
import LoginScreen from './src/components/LoginScreen';
import SplashScreen from './src/components/SplashScreen';
import SignupScreen from './src/components/SignupScreen';
import NavigationBar from './src/shared/NavigationBar';
import HomeNavigator from './src/components/HomeNavigator';

const Stack = createNativeStackNavigator();

const theme = {
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    background: '#f2eee3',
    primary: '#aaa',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName={SCREEN_NAMES.HOME_NAVIGATOR}
          screenOptions={{
            header: NavigationBar,
          }}
        >
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
          <Stack.Screen
            name={SCREEN_NAMES.HOME_NAVIGATOR}
            component={HomeNavigator}
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
