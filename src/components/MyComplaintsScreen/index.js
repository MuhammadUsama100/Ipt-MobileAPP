import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ActivityIndicator, Card, Paragraph, Title } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import ComplaintCard from '../../shared/ComplaintCard';
import SimpleLayout from '../../shared/layout/SimpleLayout';
import { getMyComplaints } from '../../sources';

const styles = StyleSheet.create({
    complaintContainer: {
        marginBottom: 20,
    }
});

export default function MyComplaintsScreen() {

    const dispatch = useDispatch();
    
    const getMyComplaintsReducer = useSelector(state => state.complaintReducer.getMyComplaints);

    useEffect(() => {
        dispatch(getMyComplaints());
    }, []);

    if(getMyComplaintsReducer.isSuccess != true) return <ActivityIndicator /> 

    return (
        <SimpleLayout>
            <ScrollView>
                {getMyComplaintsReducer.data.length > 0 && getMyComplaintsReducer.data.map((complaint) => {
                    return (
                        <ComplaintCard key={complaint.complainId} complaint={complaint} allowEndorsement={false} />
                    )
                })}
                {getMyComplaintsReducer.data.length < 1 && <Paragraph style={{alignSelf: 'center'}}>No complaints registered.</Paragraph>}
            </ScrollView>
        </SimpleLayout>
    )
}