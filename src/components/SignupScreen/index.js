import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Title, TextInput, Paragraph, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { SCREEN_NAMES } from '../../../constants/screens.constants';
import { ERRORS, MESSAGES } from '../../constants';
import FormField from '../../shared/FormField';
import SimpleLayout from '../../shared/layout/SimpleLayout';
import LocationPickerField from '../../shared/LocationPickerField';
import Logo from '../../shared/Logo';
import { signupUser } from '../../sources';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    width: '50%',
    alignSelf: 'center',
  },
  formContainer: {
    padding: 20,
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
  error: {
    color: 'red',
  }
});

export default function SignupScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userSignupReducer = useSelector(state => state.userReducer.userSignup);

  const [error, setError] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState();

  const handleSignup = values => {
    if(values.password != values.confirm_password) {
      setError(ERRORS.PASSWORDS_DONT_MATCH);
    } else {
      delete values['confirm_password'];
      const payload = {
        ...values,
        locationId: selectedLocation.id,
      };
      console.log(payload);
      dispatch(signupUser(payload, handleSignupError));
    }
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
}

  const handleSignupError = (error) => {
    console.log(JSON.stringify(error));
  };

  useEffect(() => {
    if(userSignupReducer.isSuccess) {
      alert(MESSAGES.SIGNUP_SUCCESS);
      navigation.navigate(SCREEN_NAMES.LOGIN);
    }
  }, [userSignupReducer.isFetched]);

  const handleLoginUpPress = () => {
    navigation.navigate(SCREEN_NAMES.LOGIN);
  };

  return (
    <SimpleLayout>
      <View style={styles.container}>
        <SafeAreaView style={styles.formContainer}>
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
            onLocationSelect={handleLocationSelect}
          />
          {error && <Text style={styles.error}>{error}</Text>}
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
        </SafeAreaView>
      </View>
    </SimpleLayout>
  );
}
