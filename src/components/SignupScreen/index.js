import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Title, TextInput, Paragraph, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SCREEN_NAMES } from '../../../constants/screens.constants';
import FormField from '../../shared/FormField';
import SimpleLayout from '../../shared/layout/SimpleLayout';
import LocationPickerField from '../../shared/LocationPickerField';
import Logo from '../../shared/Logo';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f2eee3',
  },
  logoContainer: {
    width: '50%',
    alignSelf: 'center',
  },
  formContainer: {
    padding: 20,
    flex: 1,
  },
  headline: {
    fontSize: 30,
    alignSelf: 'center',
  },
  signupButton: {
    marginTop: 10,
  },
  bottomText: {
    alignSelf: 'center',
    marginTop: 20,
  },
  loginText: {
    color: 'blue',
  },
});

export default function SignupScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });
  const navigation = useNavigation();

  const handleSignup = values => {
    console.log(values);
  };

  const handleLoginUpPress = () => {
    navigation.navigate(SCREEN_NAMES.LOGIN);
  };

  return (
    <SimpleLayout>
      <View style={styles.container}>
        <SafeAreaView style={styles.formContainer}>
          <ScrollView>
            <View style={styles.logoContainer}>
              <Logo />
            </View>
            <Title style={styles.headline}>Sign Up</Title>
            <FormField
              control={control}
              name="name"
              label="Name"
              required={true}
              error={errors.name?.message}
            />
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
              required={true}
              error={errors.password?.message}
              isPassword={true}
            />
            <FormField
              control={control}
              name="confirm_password"
              label="Confirm Password"
              required={true}
              error={errors.confirm_password?.message}
              isPassword={true}
            />
            <LocationPickerField
              control={control}
              name="location"
              label="Location"
              required={true}
              error={errors.location?.message}
              isPassword={true}
            />
            <Button
              mode="contained"
              onPress={handleSubmit(handleSignup)}
              style={styles.signupButton}
              disabled={!isValid}>
              Sign Up
            </Button>
            <Paragraph style={styles.bottomText}>
              Already have an account?{' '}
              <Text style={styles.loginText} onPress={handleLoginUpPress}>
                Login
              </Text>
            </Paragraph>
          </ScrollView>
        </SafeAreaView>
      </View>
    </SimpleLayout>
  );
}
