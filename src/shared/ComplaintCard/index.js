import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Paragraph } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { postEndorsementClear } from '../../redux/actions';
import { postEndorsement } from '../../sources';

const styles = StyleSheet.create({
    complaintContainer: {
        marginBottom: 20,
    },
    endorseButtonContainer: {
        justifyContent: 'flex-end'
    }
});

export default function ComplaintCard({complaint, endorsementBy, allowEndorsement = true}) {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const postEndorsementReducer = useSelector(state => state.endorsementReducer.postEndorsement);

    const handlePostEndorsementError = (err) => {
        setLoading(false);
        alert(err.error + "sed");
    }

    const handleComplaintEndorse = (complaint) => {
        setLoading(true);
        dispatch(postEndorsement({
            endorBy: endorsementBy,
            complainId: complaint.complainId,
        }, handlePostEndorsementError));
    }

    useEffect(() => {
        if(postEndorsementReducer.isSuccess && loading === true) {
            setLoading(false);
            alert("Endorsement was successful!");
            dispatch(postEndorsementClear());
        }
    }, [postEndorsementReducer.isFetched]);
    
    return (
        <Card style={styles.complaintContainer}>
            <Card.Title 
                title={complaint.offense.name} 
                subtitle={`Location: ${complaint.location.name} | Endorsements: ${complaint.endors['$values'].length}`}
            />
            <Card.Content>
                <Paragraph style={{fontWeight: 'bold'}}>Description:</Paragraph>
                <Paragraph>{complaint.detail}</Paragraph>
            </Card.Content>
            <Card.Actions style={styles.endorseButtonContainer}>
                {allowEndorsement && (
                    <Button
                        onPress={() => handleComplaintEndorse(complaint)}
                        loading={loading}
                        disable={loading}
                    >
                        Endorse
                    </Button>
                )}
            </Card.Actions>
        </Card>
    )
}