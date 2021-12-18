import React from 'react';
import { StyleSheet, View } from "react-native";
import { useTheme, withTheme } from 'react-native-paper';

const makeStyles = theme => StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 10,
    paddingTop: 20
  },
});

export default function SimpleLayout({children}) {
  const styles = makeStyles(useTheme());
  return (
      <View style={styles.container}>
          {children}
      </View>
  )
}
