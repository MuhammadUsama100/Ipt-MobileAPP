import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Title, TextInput, Paragraph, Text } from 'react-native-paper';
import { SCREEN_NAMES } from '../../../constants/screens.constants';
import FormField from '../../shared/FormField';
import Logo from '../../shared/Logo';
import SimpleLayout from '../../shared/layout/SimpleLayout';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../sources';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    width: '80%',
    alignSelf: 'center',
  },
  formContainer: {
    padding: 20,
  },
  headline: {
    fontSize: 30,
    alignSelf: 'center',
  },
  loginButton: {
    marginTop: 10,
  },
  bottomText: {
    alignSelf: 'center',
    marginTop: 20,
  },
  signUpText: {
    color: 'blue',
  },
  error: {
    color: 'red',
  },
});

export default function LoginScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userLoginReducer = useSelector(state => state.userReducer.userLogin);
  const [error, setError] = useState(null);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });

  const handleLogin = ({email, password}) => {
    dispatch(loginUser({
      email,
      password
    }, handleLoginError));
  };

  const handleLoginError = (error) => {
    setError(error);
  }

  const handleSignUpPress = () => {
    navigation.navigate(SCREEN_NAMES.SIGNUP);
  };

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
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <Title style={styles.headline}>Login</Title>
        <SafeAreaView style={styles.formContainer}>
          <FormField
            control={control}
            name="email"
            label="Email"
            required={true}
            error={errors.email?.message}
            pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
          />
          <FormField
            control={control}
            name="password"
            label="Password"
            isPassword={true}
            required={true}
            error={errors.password?.message}
          />
          {error && <Text style={styles.error}>{error}</Text>}
          <Button
            mode="contained"
            onPress={handleSubmit(handleLogin)}
            style={styles.loginButton}
            disabled={!isValid}>
            Login
          </Button>
          <Paragraph style={styles.bottomText}>
            Create an account now.{' '}
            <Text style={styles.signUpText} onPress={handleSignUpPress}>
              Sign Up
            </Text>
          </Paragraph>
        </SafeAreaView>
      </View>
    </SimpleLayout>
  );
}
