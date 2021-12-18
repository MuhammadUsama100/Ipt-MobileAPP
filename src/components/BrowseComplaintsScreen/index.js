import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';
import SimpleLayout from '../../shared/layout/SimpleLayout';

const styles = StyleSheet.create({
    complaintContainer: {
        marginBottom: 20,
    },
    endorseButtonContainer: {
        justifyContent: 'flex-end'
    }
});

export default function BrowseComplaintsScreen() {

    const [complaints, setComplaints] = useState([1, 2, 3, 4, 5]);

    const handleComplaintEndorse = (complaint) => {
        console.log(complaint);
    }

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
                            <Card.Actions style={styles.endorseButtonContainer}>
                            <Button
                                onPress={() => handleComplaintEndorse(complaint)}
                            >
                                Endorse
                            </Button>
                            </Card.Actions>
                        </Card>
                    )
                })}
            </ScrollView>
        </SimpleLayout>
    )
}