import React from 'react';
import {Controller} from 'react-hook-form';
import {StyleSheet} from 'react-native';
import {TextInput, Paragraph} from 'react-native-paper';

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
}) {
  let rules = {};
  if (required) {
    rules['required'] = {
      value: true,
      message: `Required`,
    };
  }

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, value, onBlur}}) => (
          <TextInput
            label={label}
            mode="outlined"
            value={value}
            secureTextEntry={isPassword}
            onBlur={onBlur}
            onChangeText={text => onChange(text)}
          />
        )}
        rules={rules}
      />
      {error && <Paragraph styles={styles.error}>{error}</Paragraph>}
    </>
  );
}
