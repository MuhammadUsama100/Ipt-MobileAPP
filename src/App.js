import * as React from 'react';
import { AppRegistry } from 'react-native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import {
  NavigationContainer,
} from '@react-navigation/native';
import { name as appName } from '../app.json';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAMES } from '../constants/screens.constants';
import LoginScreen from './components/LoginScreen';
import SplashScreen from './components/SplashScreen';
import SignupScreen from './components/SignupScreen';
import NavigationBar from './shared/NavigationBar';
import HomeNavigator from './components/HomeNavigator';
import store from './redux/store';
import { Provider } from 'react-redux';
import axios from 'axios';
import { getFromAsyncStorage } from './utils';
import { BASE_URL } from '../constants/source.constants';

const Stack = createNativeStackNavigator();

const theme = {
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    background: '#f2eee3',
    primary: '#aaa',
  },
};

axios.defaults.baseURL = BASE_URL;

if (!axios.defaults.headers.common['Authorization']) {
  getFromAsyncStorage('user').then((userData) => {
    axios.defaults.headers.common['Authorization'] = userData ? `Bearer ${userData.token}` : null;
  })
}

export default function Main() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={SCREEN_NAMES.SPLASH}
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
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
