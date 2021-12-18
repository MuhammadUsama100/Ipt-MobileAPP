import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SCREEN_NAMES} from '../../../constants/screens.constants';
import SimpleLayout from '../../shared/layout/SimpleLayout';
import Logo from '../../shared/Logo';

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
    <SimpleLayout>
      <Logo />
    </SimpleLayout>
  );
}
