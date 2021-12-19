import React, { useEffect } from 'react';
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Title, useTheme } from 'react-native-paper';
import ComplaintStats from './ComplaintStats';
import SimpleLayout from '../../shared/layout/SimpleLayout';
import { VictoryPie } from 'victory-native';
import { useDispatch, useSelector } from 'react-redux';
import { getComplaintStats } from '../../sources';

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
    const dispatch = useDispatch();

    const getComplaintStatsReducer = useSelector(state => state.complaintReducer.getComplaintStats);

    useEffect(() => {
        dispatch(getComplaintStats());
    }, []);

    if(getComplaintStatsReducer.isSuccess != true) return <ActivityIndicator />

    const total = getComplaintStatsReducer.data.reduce((prev, curr) => {
        delete curr['$id'];
        return prev + parseInt(Object.values(curr)[0], 10)
    }, 0);

    const avg = total / getComplaintStatsReducer.data.length;

    const data = getComplaintStatsReducer.data.map((val) => {
        delete val['$id'];
        return {
            x: Object.keys(val)[0],
            y: Object.values(val)[0]
        };
    });

    const handleOnRefresh = () => {
        dispatch(getComplaintStats());
    };

    return (
        <SimpleLayout>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={getComplaintStatsReducer.isLoading}
                        onRefresh={handleOnRefresh}
                    />
                }
            >
                <Title style={styles.heading}>Complaints Overview</Title>
                <View style={styles.complaintStatsContainer}>
                    <ComplaintStats val={total} heading={"Total"} subHeading={"complaints registered"} />
                    <ComplaintStats val={avg} heading={"Average"} subHeading={"per location"} />
                </View>
                <VictoryPie
                    labelPlacement="perpendicular"
                    data={data}
                />
            </ScrollView>
        </SimpleLayout>
    )
}