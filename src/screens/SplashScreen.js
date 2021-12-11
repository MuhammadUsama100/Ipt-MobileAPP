import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Headline} from 'react-native-paper';
import {SCREEN_NAMES} from '../../constants/screens.constants';
import Logo from '../shared/Logo';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2eee3',
  },
});

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: SCREEN_NAMES.LOGIN,
          },
        ],
      });
    }, 2500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
}
