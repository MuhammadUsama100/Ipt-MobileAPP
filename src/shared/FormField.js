import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput, Paragraph} from 'react-native-paper';
import FormController from './FormController';

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
});

export default function FormField({
  control,
  name,
  label,
  required,
  isPassword,
  error,
  multiline,
  pattern,
}) {
  let rules = {};
  if (required) {
    rules['required'] = {
      value: true,
      message: `Required`,
    };
  }

  return (
    <FormController
      name={name}
      control={control}
      render={({field: {onChange, value, onBlur}}) => (
        <TextInput
          label={label}
          // mode="outlined"
          value={value}
          secureTextEntry={isPassword}
          onBlur={onBlur}
          onChangeText={text => onChange(text)}
          multiline={multiline}
        />
      )}
      error={error}
      required={required}
      pattern={pattern}
    />
  );
}
