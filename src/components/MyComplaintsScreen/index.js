import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ActivityIndicator, Card, Paragraph, Title } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import SimpleLayout from '../../shared/layout/SimpleLayout';
import { getMyComplaints } from '../../sources';

const styles = StyleSheet.create({
    complaintContainer: {
        marginBottom: 20,
    }
});

export default function MyComplaintsScreen() {

    const dispatch = useDispatch();
    const [complaints, setComplaints] = useState();
    
    const getMyComplaintsReducer = useSelector(state => state.complaintReducer.getMyComplaints);

    useEffect(() => {
        dispatch(getMyComplaints());
    }, []);

    if(getMyComplaintsReducer.isSuccess != true) return <ActivityIndicator /> 

    console.log(getMyComplaintsReducer.data);

    return (
        <SimpleLayout>
            <ScrollView>
                {getMyComplaintsReducer.data.length > 0 && getMyComplaintsReducer.data.map((complaint) => {
                    console.log(complaint);
                    return (
                        <Card key={complaint.complainId} style={styles.complaintContainer}>
                            <Card.Title title={complaint.offenseId} subtitle={`Location: ${complaint.locationId}`} />
                            <Card.Content>
                                <Paragraph style={{fontWeight: 'bold'}}>Description:</Paragraph>
                                <Paragraph>{complaint.detail}</Paragraph>
                            </Card.Content>
                        </Card>
                    )
                })}
                {getMyComplaintsReducer.data.length < 1 && <Paragraph style={{alignSelf: 'center'}}>No complaints registered.</Paragraph>}
            </ScrollView>
        </SimpleLayout>
    )
}