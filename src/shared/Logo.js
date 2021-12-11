import React from 'react';
import {Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
});

export default function Logo() {
  return (
    <Image
      source={require('../../assets/images/logo.jpg')}
      style={styles.logo}
    />
  );
}
