import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SCREEN_NAMES } from '../../../constants/screens.constants';
import { loginUserSuccess } from '../../redux/actions';
import SimpleLayout from '../../shared/layout/SimpleLayout';
import Logo from '../../shared/Logo';
import { getFromAsyncStorage } from '../../utils';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default function SplashScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userLoginReducer = useSelector(state => state.userReducer.userLogin);

  useEffect(() => {
    getFromAsyncStorage('user').then((userData) => {
      if (userData) {
        dispatch(loginUserSuccess(userData));
      } else {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: SCREEN_NAMES.LOGIN,
            },
          ],
        });
      }
    });
  }, []);

  useEffect(() => {
    if(userLoginReducer.isSuccess) {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: SCREEN_NAMES.HOME_NAVIGATOR,
          },
        ],
      });
    }
  }, [userLoginReducer.isFetched]);

  return (
    <SimpleLayout>
      <View style={styles.container}>
        <Logo />
      </View>
    </SimpleLayout>
  );
}
