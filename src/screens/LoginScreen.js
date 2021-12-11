import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Title, TextInput, Paragraph, Text} from 'react-native-paper';
import {ERRORS} from '../../constants/errors.constants';
import {SCREEN_NAMES} from '../../constants/screens.constants';
import FormField from '../shared/FormField';
import Logo from '../shared/Logo';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f2eee3',
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
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'});

  const handleLogin = values => {
    console.log(values);
  };

  console.log(errors);

  const handleSignUpPress = () => {
    navigation.navigate(SCREEN_NAMES.SIGNUP);
  };

  return (
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
        />
        <FormField
          control={control}
          name="password"
          label="Password"
          isPassword={true}
          required={true}
          error={errors.password?.message}
        />
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
  );
}
