import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Title, Text} from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
});

export default function ComplaintStats({val, heading, subHeading}) {
    return (
        <View style={styles.container}>
            <Text>{heading}</Text>
            <Title>{val}</Title>
            <Text>{subHeading}</Text>
        </View>
    )
}