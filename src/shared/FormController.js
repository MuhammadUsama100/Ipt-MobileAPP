import React from 'react';
import {Controller} from 'react-hook-form';
import {StyleSheet} from 'react-native';
import {Paragraph} from 'react-native-paper';

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
});

export default function FormController({
  control,
  name,
  required,
  error,
  pattern,
  render,
}) {
  let rules = {};
  if (required) {
    rules['required'] = {
      value: true,
      message: `Required`,
    };
  }

  if(pattern) {
    rules['pattern'] = {
      value: pattern,
      message: "Invalid value"
    };
  }

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={render}
        rules={rules}
      />
      {error && <Paragraph styles={styles.error}>{error}</Paragraph>}
    </>
  );
}
