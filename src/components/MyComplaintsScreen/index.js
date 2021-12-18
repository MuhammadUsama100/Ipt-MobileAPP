import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';
import SimpleLayout from '../../shared/layout/SimpleLayout';

const styles = StyleSheet.create({
    complaintContainer: {
        marginBottom: 20,
    }
});

export default function MyComplaintsScreen() {

    const [complaints, setComplaints] = useState([1, 2, 3, 4, 5]);

    return (
        <SimpleLayout>
            <ScrollView>
                {complaints.map((complaint) => {
                    return (
                        <Card key={complaint} style={styles.complaintContainer}>
                            <Card.Title title="Complaint type" subtitle="Karachi" />
                            <Card.Content>
                                <Paragraph>Description</Paragraph>
                            </Card.Content>
                        </Card>
                    )
                })}
            </ScrollView>
        </SimpleLayout>
    )
}