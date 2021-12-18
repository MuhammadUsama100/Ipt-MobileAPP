import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Title, TextInput, Paragraph, Text } from 'react-native-paper';
import { SCREEN_NAMES } from '../../../constants/screens.constants';
import FormField from '../../shared/FormField';
import Logo from '../../shared/Logo';
import SimpleLayout from '../../shared/layout/SimpleLayout';

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
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });

  const handleLogin = values => {
    navigation.reset({
      index: 0,
        routes: [
          {
            name: SCREEN_NAMES.HOME_NAVIGATOR,
          },
        ],
    });
  };

  const handleSignUpPress = () => {
    navigation.navigate(SCREEN_NAMES.SIGNUP);
  };

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
