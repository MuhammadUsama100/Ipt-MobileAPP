import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Caption, Title, useTheme } from 'react-native-paper';
import ComplaintStats from './ComplaintStats/ComplaintStats';
import SimpleLayout from '../../shared/layout/SimpleLayout';
import { VictoryPie } from 'victory-native';

const makeStyles = theme => StyleSheet.create({
    heading: {
        alignSelf: 'center',
    },
    complaintStatsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        height: 150,
        paddingTop: 50
    },
});

export default function HomeScreen() {
    const styles = makeStyles(useTheme());
    return (
        <SimpleLayout>
            <Title style={styles.heading}>Complaints Overview</Title>
            <View style={styles.complaintStatsContainer}>
                <ComplaintStats val={300} heading={"Pakistan"} subHeading={"complaints registered"} />
                <ComplaintStats val={70} heading={"Karachi"} subHeading={"complaints registered"} />
            </View>
            <VictoryPie
                data={[
                    { x: "Karachi", y: 35 },
                    { x: "Islamabad", y: 40 },
                    { x: "Quetta", y: 55 }
                ]}
            />
        </SimpleLayout>
    )
}